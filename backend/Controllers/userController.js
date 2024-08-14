const userSchema = require('../Model/userData')
const cartController = require('../Controllers/cartController')
const ordersController = require('../Controllers/ordersController')
const jwt = require('jsonwebtoken')
let data;

const maxAge = 12*60*60;
const createToken = (id) => {
    return jwt.sign({ id }, 'furniro secret', {
        expiresIn: maxAge
    })
}

const handleErrors = (err) => {
    const errors = { email: "", password: "" };

    if (err.message.includes("Incorrect Password")) {
        errors.password = "Incorrect Password"
    }


    if (err.message.includes("Email is not registered , consider signing up")) {
        errors.email = "Email is not registered , consider signing up"
    }

    if (err.message.includes("userSchema validation failed")) {

        Object.values(err.errors).forEach(err => {
            errors[err.properties.path] = err.properties.message
        })
    }
    return errors;
}

const showUser = async (req, res) => {
    try {
        let data = await userSchema.find()
        res.send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const addUser = async (req, res) => {
    try {

        const existingUser = await userSchema.findOne({ email: req.body.email })
        if (existingUser)return res.status(400).send({ email: "Email is already registered , consider logging in" })

        data = new userSchema(req.body)
        await data.save()
        cartController.addCart(data)
        ordersController.createOrders(data)
        const token = createToken(data._id)
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true })
        res.status(200).json({ user: data._id })
    } catch (error) {

        const errors = handleErrors(error)
        res.status(400).send(errors)

    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await userSchema.login(email, password)
        const token = createToken(data._id)
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true })
        res.status(200).json({ user: data._id })

    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).send(errors)
    }
}


const userDelete = async (req, res) => {
    await userSchema.deleteMany({ __v: 0 })
    res.send("Users Deleted")
}

const userLogOut = async(req,res) =>{
  res.cookie('jwt' , "" , {maxAge:1})
  res.send("logout")
}
exports.userLogOut = userLogOut
exports.userLogin = userLogin
exports.data = data
exports.showUser = showUser
exports.userDelete = userDelete
exports.addUser = addUser