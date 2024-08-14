const mongoose = require('mongoose');
const orderItemData=mongoose.Schema({
    order_id:{
        type:Number,
        required:false
    },
    quantity:{
        type:Number,
        required:false
    },
    color:{
        type:String,
        required:false
    },
    size:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false
    },
    prod_img:{
        type:String,
        required:false
    }
})
const orderItemSchema = mongoose.model('orderItemSchema' , orderItemData)
module.exports = orderItemSchema