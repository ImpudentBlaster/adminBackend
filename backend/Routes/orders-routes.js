const express = require('express')
const router = express.Router()
const ordersController = require('../Controllers/ordersController')

router.post('/create' , ordersController.createOrders)

module.exports = router