const express = require('express')
const router = express.Router()
const cartItemController = require('../Controllers/cartItemController')

router.post('/add' , cartItemController.addCartItem)
router.get('/show' , cartItemController.showCartItem)
router.post('/update' , cartItemController.updateCartItem)
router.post('/delete' , cartItemController.deleteCartItem)

module.exports = router