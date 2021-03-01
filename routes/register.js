const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const app = express();
const mailer = require('../mailer')
const {checkAuthChangePass, checkPassword} = require('../middlewares/auth');

app.post('/register',[checkPassword], function (req, res) {
    let body = req.body;

    let { username, email, password, confirm_password, role, status } = body;
    let user = new User({
        username,
        email,
        password: bcrypt.hashSync(password, 10),
        role,
        status,
    });
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/

                user.save((err, userDB) => {
                    if (err) {
                        return res.status(400).json({
                            ok: false,
                            err: err
                        })
                    }

                    //generate the authentication token
                    let token = jwt.sign({
                        user: userDB,
                    }, process.env.SEED_AUTHENTICATION, {
                        expiresIn: process.env.TOKEN_EXPIRATION
                    })
                    res.json({
                        ok: true,
                        userDB,
                        token: token
                    })
                })
          
            

    let res_email_body = '<b>Thank you for registering with us!</b></br><a href="https://node-mongo-vue-crud.herokuapp.com">Contact List</a> ';
    //send welcome email
    mailer.mailer(email, res_email_body)

})





app.get('/forgotPassword/:email', (req, res) => {
    let email = req.params.email;
    User.findOne({ email: email }, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: "try again later."
                }
            })
        }

        //check if the entered user exist
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "email not found"
                }
            })
        }

        //generate the authentication token
        let token = jwt.sign({
            user: userDB,
        }, process.env.SEED_AUTHENTICATION, {
            expiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRATION
        })

        let reset_token = token;

        if (userDB) {
            try {
                // let res_email_body = '<b>Do you forgot our password?</br>follow the link to reset your password</b></br><a href="https://node-mongo-vue-crud.herokuapp.com/reset_password/?token=' + reset_token + '">Contact List</a> ';
                let res_email_body = '<b>Do you forgot your password?</br>follow the link to reset your password</b></br><a href="https://node-mongo-vue-crud.herokuapp.com/reset_password/?token=' + reset_token + '&email='+ email + '">Contact List</a> ';
                //send link to reset password 
                mailer.mailer(email, res_email_body)
                res.sendStatus(200);
            } catch (e) {
                console.log(e)
            }
        }

    })

})

app.get('/reset_password/', (req, res) => {
    let token = req.query.token;
    let email = req.query.email;

    res.redirect('https://node-mongo-vue-crud.herokuapp.com/changePassword/?token=' + token + '&email=' + email)
})


app.put('/change_password/',[checkAuthChangePass,checkPassword], (req, res) => {

    let {password,confirm_password,email} = req.body;
    
                User.findOneAndUpdate({email: email},{$set: {password : bcrypt.hashSync(password, 10)}},{new:true}, (err, userDB) => {
                        if (err) {
                            return res.status(400).json({
                                ok: false,
                                err
                            });
                        }            
                        res.json({
                            ok:true,
                            }
                            );
                    });

});

module.exports = app;