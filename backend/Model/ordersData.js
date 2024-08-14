const mongoose = require('mongoose');
const ordersData = mongoose.Schema({
    user_id:{
        type:String,
        required:false
    },
    addressId:{
        type:Number,
        required:false
    },
    total:{
        type:Number,
        required:false
    },
    status:{
        type:String,
        required:false
    }
})
const ordersSchema = mongoose.model('ordersSchema' , ordersData)
module.exports = ordersSchema