const nodemailer = require('nodemailer')
const html = require('html-template-tag')

const option = {
  service: 'gmail',
  // host: 'smtp.ethereal.email',
  // port: 587,
  // secure: false,
  auth: {
    // user: process.env.GMAIL_EMAIL,
    // api_key: process.env.GMAIL_SECRET,
    // pass: process.env.GMAIL_PASS
    // user: 'scgkae5amywoyngj@ethereal.email',
    // pass: 'j2W7amf13sDD8CgWUW'
    type: 'OAuth2',
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET
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
