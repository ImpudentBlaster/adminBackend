const ordersSchema = require('../Model/ordersData')

const createOrders = async(data)=>{
    try {
       
        let temp = new ordersSchema({user_id : data._id})
        await temp.save()
    } catch (error) {
        console.log(error)
    }
}

exports.createOrders = createOrders