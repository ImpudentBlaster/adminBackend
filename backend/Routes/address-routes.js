const express = require('express')
const router = express.Router()
const addressController = require('../Controllers/addressController')

router.post('/add' , addressController.addAddress)
router.post('/delete' , addressController.deleteAddress)

module.exports = router