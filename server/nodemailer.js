const nodemailer = require('nodemailer')
const html = require('html-template-tag')

const option = {
  // service: 'gmail',
  // auth: {
  //   type: 'OAuth2',
  //   user: process.env.GMAIL_EMAIL,
  //   clientId: process.env.GMAIL_CLIENT_ID,
  //   clientSecret: process.env.GMAIL_CLIENT_SECRET
  //   // user: "parigue@gmail.com",
  //   // pass: "qkfka210"
  // }
  host: 'smtp.msn.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'parigu2@msn.com',
    pass: 'Gmlrlwhd87'
  }
}


const transporter = nodemailer.createTransport(option)

const sendMail = mailOptions => {
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.error(err)
    else console.log(info)
  })
}

const mailConfirmation = mail => ({
  from: 'no-reply@test.com',
  to: 'parigu2@msn.com',
  subject: `E-mail confirmation sent to Minkyu Yang`,
  html: html`<h1>Thank you ${mail.sender}</h1>
  <p>Your e-mail has been sent to Minkyu Yang</p>
  <p>I will respond you as soon as possible</p>
  <p>Thank you!</p>
  <br/>
  <p>${mail.subject}</p>
  <p>${mail.body}</p>
  <br/>
  <p>Minkyu Yang</p>
  <p>Fullstack Software Developer</p>
  <p>------------------------------------</p>
  <p>1-224-766-9060</p>
  <p>parigue@gmail.com</p>`
})

module.exports = {
  transporter,
  mailConfirmation,
  sendMail
}
