'use strict'
require('dotenv').config();

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailer = message => {
    transporter.sendMail(message, (err, info) =>{
        if(err) return console.log(err);
        console.log(`Email sent: `, info);
    })
};

module.exports = mailer;

// // send mail with defined transport object
// let mailOptions = {
//     from: 'kjgrouptaxi@gmail.com', // sender address
//     to: 'kjgrouptaxi@gmail.com, garikgelios@gmail.com', // list of receivers
//     subject: 'Test application from the site', // Subject line
//     text: 'Hello world?', // plain text body
//     html: `req.body.name`;
// };
//
// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log(`Error Occurs`, err);
//     } else {
//         console.log(`Email sent!!!`);
//     }
// });

