// user routers setup

const express = require('express')
const router = express.Router()

const { bookTime } = require('../controllers/userController')


// user time slot booking route
router.post("/api/booking-time", bookTime)

module.exports = router