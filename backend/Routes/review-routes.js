const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')

router.post('/add' , reviewController.addReview)

module.exports = router