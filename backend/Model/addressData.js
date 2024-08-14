const mongoose = require('mongoose');

const addressData = mongoose.Schema({
    userId:{
        type:String,
        required:false
    },
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    companyName:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    streetAddress:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false,
    },
    province:{
        type:String,
        required:false
    },
    zipCode:{
        type:Number,
        required:false
    },
    phone:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    additionalInfo:{
        type:String,
        required:false
    }
})
const addressSchema = mongoose.model('addressSchema' , addressData)
module.exports = addressSchema