const mongoose = require('mongoose');
const cartData = mongoose.Schema({
    user_id:{
        type:String,
        required:false
    }
})
const cartSchema = mongoose.model('cartSchema' , cartData);
module.exports = cartSchema