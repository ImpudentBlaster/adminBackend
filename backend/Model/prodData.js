const mongoose = require('mongoose');
const prodData = mongoose.Schema({
    img: {
        type: String,
        required: false
    },
    prodName: {
        type: String,
        required: false
    },
    prodDesc: {
        type: String,
        required: false
    },
    prodPrice: {
        type: String,
        required: false
    },
    prodBubble: {
        type: String,
        required: false
    },
    prodRedPrice:{
        type:String,
        required:false
    }
})
const prodSchema = mongoose.model('prodSchema', prodData)
module.exports = prodSchema