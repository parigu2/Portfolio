const router = require('express').Router()
const {mailConfirmation, sendMail} = require('../nodemailer')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    mailConfirmation(email, id)
    sendMail(mailOptions)
  } catch (err) {
    next(err)
  }
})
