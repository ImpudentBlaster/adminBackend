const cartItemSchema = require('../Model/cartItems')

const addCartItem =async (req,res) =>{
 try {
   console.log(req.body)
    let data = new cartItemSchema(req.body)
    await data.save()
    console.log(data)
    res.status(200).send("added to cart")
 } catch (error) {
    res.status(500).send(error.message)
 }
}

const showCartItem = async(req,res)=>{
   try {
      let data = await cartItemSchema.find({})
      res.status(200).send(data)
   } catch (error) {
      res.status(500).send(error.message)
   }
}

const updateCartItem = (req,res) =>{
 try {
   console.log(req.body)
 } catch (error) {
   res.status(500).send(error.message)
 }
}

const deleteCartItem =async (req,res)=>{
   try {
      await cartItemSchema.deleteMany({__v:0})
   } catch (error) {
      
   }
}

exports.updateCartItem = updateCartItem
exports.addCartItem = addCartItem
exports.showCartItem = showCartItem
exports.deleteCartItem =deleteCartItem