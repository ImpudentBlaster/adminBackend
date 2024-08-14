const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'upload');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
const upload = multer({storage : storage})

router.get('/show', productController.showProducts);
router.post('/add' ,upload.single('img') ,productController.addProducts);
router.post('/delete/:id' , productController.deleteProducts)

module.exports = router;
