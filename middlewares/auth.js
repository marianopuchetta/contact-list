const jwt = require('jsonwebtoken');


let checkAuth = (req, res, next) => {
    //headers    
    let token = req.get('token');

    jwt.verify(token, process.env.SEED_AUTHENTICATION, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'error token'
                }
            });
        }
        req.user = decoded;
        console.log(decoded)
        next();
    })
};

const checkRole = function (req, res, next) {

    let role = req.get('role');

    if (role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'You\'re not allowed'
            }
        });
    }
}

const checkPassword = function (req, res, next) {

    let password = req.body.password;
    let confirm_password = req.body.confirm_password;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/

    if (password !== '') {
        if (password === confirm_password) {
            if (regex.test(password)) {
                next();
            } else {
                return res.status(401).json({
                    ok: false,
                    err: {
                        message: 'password must contain min 8 max 32 upper 1 lower 1 special 1 number 1'
                    }
                });
            }
        } else {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'password do not match'
                }
            });
        }
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'password can\'t be empty'
            }
        });
    }
}
let checkAuthChangePass = (req, res, next) => {
    //headers    
    let token = req.get('token');

    jwt.verify(token, process.env.SEED_AUTHENTICATION, (err, decoded) => {

        let email_token_user = decoded.user.email;
        let email_req_change_password = req.body.email;
        if(email_token_user !== email_req_change_password){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'error token try again'
                }
            });
        }
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'error token try again'
                }
            });
        }
        req.user = decoded;

        next();
    })
};

module.exports = { checkAuth, checkRole, checkPassword, checkAuthChangePass };