"use strict";

const nodemailer = require("nodemailer");
 
let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, 
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

 module.exports = {
    async  mailer(email,body) {
try{

        let info = await transporter.sendMail({
            from: '"Contact List" <node-mongo-vue-crud@hotmail.com>',
            to: email,
            subject: "Hello from Contact List",
            text: "Hello from Contact List ",
            html: body
        });
    
        console.log("Message sent: %s", info.messageId);
}catch(e){
    console.log(e)
}
       
    
    }
 }

