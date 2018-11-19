const router = require('express').Router()
const {mailConfirmation, sendMail} = require('../nodemailer')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const email = req.body
    console.log(email)
    await sendMail(mailConfirmation(email))
    res.json('message')
  } catch (err) {
    next(err)
  }
})
