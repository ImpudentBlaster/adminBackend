const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('/add' , userController.addUser)
router.post('/delete' ,  userController.userDelete)
router.get('/show' , userController.showUser)
router.post('/login' , userController.userLogin)
router.get('/logout' , userController.userLogOut)

module.exports = router