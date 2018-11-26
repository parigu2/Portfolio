const nodemailer = require('nodemailer')
const html = require('html-template-tag')

const option = {
  service: 'gmail',
  auth: {
    // type: 'OAuth2',
    // user: process.env.GMAIL_EMAIL,
    // clientId: process.env.GMAIL_CLIENT_ID,
    // clientSecret: process.env.GMAIL_CLIENT_SECRET
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS
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
  from: 'no-reply@confirmation.com',
  to: mail.sender,
  subject: `E-mail confirmation sent to Minkyu Yang`,
  html: html`<h1>Thank you ${mail.name}</h1>
  <p>Your e-mail has been sent to Minkyu Yang</p>
  <p>I will respond you as soon as possible</p>
  <p>Thank you!</p>
  <br/>
  <p>------ your message below ---------</p>
  <p>Subject: ${mail.subject}</p>
  <p>Message: ${mail.message}</p>
  <p>------ your message above ---------</p>
  <br/>
  <p>Minkyu Yang</p>
  <p>Fullstack Software Developer</p>
  <p>------------------------------------</p>
  <p>Phone: 1-224-766-9060</p>
  <p>E-mail: parigue@gmail.com</p>`
})

const mailToMinkyu = mail => ({
  from: mail.sender,
  to: process.env.GMAIL_EMAIL,
  subject: mail.subject,
  html: html`<h1>message from ${mail.name}, ${mail.organization}</h1>
  <br/>
  <p>${mail.message}</p>
  <p>by ${mail.sender}, name: ${mail.name}, organization: ${mail.organization}</p>
  `
})

module.exports = {
  transporter,
  mailConfirmation,
  mailToMinkyu,
  sendMail
}
