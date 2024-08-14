const express= require('express')
const router = express.Router();
const contactController = require('../Controllers/contactController')

router.post('/add' , contactController.addContact)
router.post('/delete' , contactController.deleteContact)
module.exports=router;