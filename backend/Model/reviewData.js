const mongoose = require('mongoose');

const reviewData = mongoose.Schema({
    userId: {
        type: Number,
        required: false
    },
    prodId: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    opinion: {
        type: String,
        required: false
    }
})
const reviewSchema = mongoose.model('reviewSchema', reviewData)
module.exports = reviewSchema;