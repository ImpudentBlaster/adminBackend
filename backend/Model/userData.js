const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userData = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [false, 'Email is required'],
        validate: [isEmail, 'Please enter a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [false, 'password is required'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    phoneNumber: {
        type: Number,
        required: false
    },

})

userData.pre('save',async function (next) {
    const salt  = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password , salt)
    next()
})

userData.statics.login = async function (email,password){
    
     const user = await this.findOne({email:email})
     if(user){
       const auth =await bcrypt.compare(password , user.password)
       if(auth) return user
       throw new Error('Incorrect Password')
       
     }else{
        throw new Error("Email is not registered , consider signing up");
        
     }
}

const userSchema = mongoose.model('userSchema', userData)
module.exports = userSchema
