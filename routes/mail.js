var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();
router.get('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lefjor@gmail.com', // Your email id
      pass: 'lef!30jor' // Your password
    }
  });

  var text = 'Hello world from \n\n' + req.body.name;

  var mailOptions = {
    from: 'lefjor@gmail.com>', // sender address
    to: 'lefjor@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
}

module.exports = router;
