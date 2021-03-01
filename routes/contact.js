// Import express
const express = require('express');
const { checkAuth} = require('../middlewares/auth');
const app = express();



// Import model
const Contact = require('../models/contact');


//GET all contacts
app.get('/contacts' ,(req, res) => {

    let from = req.query.from || 0;
    let until = req.query.until || 100;

    from = Number(from);
    until = Number(until);

    Contact.find()
        .skip(from)
        .limit(until)
        .exec((err, contactDB,_id) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            
            res.json(contactDB);
        });
});

//GET contact by id
app.get('/contact/:id', (req, res) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
           contact : contactDB}
            );
    });
});

//ADD contact
app.post('/contact/add', (req, res) => {
    let body = req.body;

    let newContact = new Contact({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        contact_number: body.contact_number
    });
    newContact.save((err) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json(newContact);
    });
});

//UPDATE contact
app.put('/contact/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;
    let update = body;

    Contact.findByIdAndUpdate(id, update,
        (err, userDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                contact : userDB}
                );
        });
});

//DELETE contact
app.delete('/contact/:id', (req, res) => {
    let id = req.params.id;
    Contact.findByIdAndRemove(id, (err, contactRemoved) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            contact : contactRemoved
        });
    });
})

//search contact
app.post('/search',[checkAuth],(req,res)=>{
    let body = req.body.input_search_contact;
    let regex = { '$regex': new RegExp("^" + body,"i") };
    console.log(req.body)
Contact.find({$or:[{first_name: regex},{last_name: regex},{email: regex}]},(err,contacts)=>{
        if(err){
          return res.status(500).json({
              ok:false,
              err:err
          })
      } 
      if(contacts.length === 0){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'NOT FOUND'
            }
        });
    }
    console.log(contacts)
    res.json({
        ok:true,
        contacts:contacts
    }) 
   })
})
// export app - express
module.exports = app;