'use strict'
require('dotenv').config();

const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: 'kjgrouptaxi@gmail.com', // sender address
        to: 'kjgrouptaxi@gmail.com, garikgelios@gmail.com', // list of receivers
        subject: 'Test application from the site', // Subject line
        text: 'Hello world?', // plain text body
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(`Error Occurs`, err);
        } else {
            console.log(`Email sent!!!`);
        }
    });

