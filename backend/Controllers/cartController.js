const cartSchema = require('../Model/cartData')

const showCart = async(req,res)=>{
    try {
        let data = await cartSchema.find({})
        res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}


const addCart = async (data) => {
    try {
        let temp = new cartSchema({ user_id: data._id })
        await temp.save()
       
    } catch (error) {
       console.log(error.message , "error")
    }
}



exports.showCart = showCart
exports.addCart = addCart
