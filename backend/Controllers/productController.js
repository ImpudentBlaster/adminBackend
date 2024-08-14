const prodSchema = require('../Model/prodData');

const showProducts = async (req, res) => {
  try {
    let data = await prodSchema.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addProducts = async (req,res)=>{

  try{
    console.log('Add Products func')
    console.log(req.body)
    console.log(req.file)
    let data = new prodSchema({...req.body , img:req.file.path})
    await data.save();
    res.status(200).send("data added")
  }catch(err){
    console.log("error message" , err)
    res.status(500).send({ error: err.message });
  }
}

const deleteProducts = async(req,res)=>{
  try{
    console.log(req.body)
    let id = req.params.id;
    await prodSchema.findByIdAndDelete(id)
    res.send("deleted")
  }catch(err){
    res.status(404).send(err.message)
  }
}

exports.showProducts = showProducts;
exports.addProducts = addProducts;
exports.deleteProducts = deleteProducts;