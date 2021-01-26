
const nodemailer = require("nodemailer");
const mailer={}

// async..await is not allowed in global scope, must use a wrapper
mailer.send = function send() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user:'nolitabistrot@gmail.com', // generated ethereal user
      pass: 'Apple1209.', // generated ethereal password
    },
  });

  // send mail with defined transport object
    transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>', // sender address
    to: "nolitabistrot@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

}

module.exports=mailer