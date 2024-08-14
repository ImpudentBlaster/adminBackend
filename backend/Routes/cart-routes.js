const express = require('express')
const router = express.Router()
const cartController = require('../Controllers/cartController')

router.get('/show' , cartController.showCart)
router.post('/add' , cartController.addCart)


module.exports = router