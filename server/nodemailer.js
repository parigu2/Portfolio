const nodemailer = require('nodemailer')
const html = require('html-template-tag')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_SECRET
  }
})

const sendMail = mailOptions => {
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.error(err)
    else console.log(info)
  })
}

const mailConfirmation = mail => ({
  from: 'parigue@gmail.com',
  to: mail.sender,
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
