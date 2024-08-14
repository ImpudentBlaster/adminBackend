const addressSchema = require('../Model/addressData')

const addAddress = async (req, res) => {
 
    try {
        let data = new addressSchema(req.body)
        await data.save()
        res.status(200).send("address saved")
    } catch (error) {
        console.log("error message", error)
        res.status(500).send(error.message)
    }
}

const deleteAddress = async(req,res) =>{
  try{
   await addressSchema.deleteMany({__v:0})
   res.status(200).send("deleted")
  }catch(err){
    res.status(500).send(err.message)
  }
}

exports.addAddress = addAddress
exports.deleteAddress = deleteAddress