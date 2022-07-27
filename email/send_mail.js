var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'itec229.gr2.149258@gmail.com',
        pass:'breeze20'
    }
});
var mailOptions ={
    from: 'itec229.gr2.149258@gmail.com',
    to:'maniraho.didier2190@gmail.com',
    subject:'Sending Email using Node.js',
    text:'That was easy!'
};

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }else{
        console.log('Email sent: ' + info.response);
    }
});