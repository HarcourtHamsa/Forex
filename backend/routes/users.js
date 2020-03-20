const router = require("express").Router();
const nodeMailer = require("nodemailer");
const userSchema = require("../models/users");

router.get("/", (req, res) => {
  userSchema
    .findAll()
    .then(result => res.json(result))
    .catch(err => console.log(err.stack));
});

router.post("/add", (req, res) => {
  userSchema
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      emailaddress: req.body.email,
      role: "member"
    })
    .then(result => res.json(result))
    .catch(err => console.log(err.stack));

  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hamsaharcourt@gmail.com",
      pass: "Eckankar2757101"
    }
  });
  let mailOptions = {
    from: '"Harcourt Hamsa" <hamsaharcourt@gmail.com>', // sender address
    to: "hamsaharcourt@gmail.com", // list of receivers
    subject: "Welcome to Stock", // Subject line
    text: `Dear ${req.body.firstname}, <br /> ! welcome to polixe`, // plain text body
    html: "<b>Here are your account details</b>" // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
});

module.exports = router;
