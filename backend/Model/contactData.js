const mongoose = require('mongoose');
const contactData = mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    id: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    }
})
const contactSchema = mongoose.model('contactSchema', contactData)
module.exports = contactSchema;
