const router = require('express').Router()
const {mailConfirmation, mailToMinkyu, sendMail} = require('../nodemailer')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const email = req.body
    await sendMail(mailConfirmation(email))
    await sendMail(mailToMinkyu(email))
    res.json('message')
  } catch (err) {
    next(err)
  }
})
