const reviewSchema =require('../Model/reviewData')

const addReview = async (req,res) =>{
try {
    let data = new reviewSchema(req.body)
    await data.save()
    res.status(200).send("review added")
} catch (error) {
    res.status(500).send(error.message)
}
}

exports.addReview = addReview