const contactSchema = require('../Model/contactData')
const userSchema = require('../Model/userData')

const addContact = async (req, res) => {
    try {
        console.log(userSchema(_id))
        let data = new contactSchema(req.body)
   
        await data.save()
        res.status(200).send("contact form submitted")
    } catch (err) {
        console.log("error message", err)
        res.status(500).send(err.message)
    }

}
const deleteContact =async(req,res)=>{
await contactSchema.deleteMany({__v:0})
res.send("Deleted")
}

exports.addContact = addContact;
exports.deleteContact = deleteContact