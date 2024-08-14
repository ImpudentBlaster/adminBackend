const mongoose = require('mongoose');
const cartItemsData = mongoose.Schema({
    cart_id:{
        type:String,
        required:false
    },
    prod_id:{
        type:String,
        required:false
    },
    quantity:{
        type:Number,
        required:false
    },
    img:{
        type:String,
        required:false
    },
    prodName:{
        type:String,
        requried:false
    },
    prodPrice:{
        type:String,
        required:false
    }
})
const cartItemSchema = mongoose.model('cartItemSchema' , cartItemsData)
module.exports= cartItemSchema