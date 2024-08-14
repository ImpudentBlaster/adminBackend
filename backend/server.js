const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const port = 5000;
const prodRoutes = require('./Routes/product-routes')
const contactRoutes =require('./Routes/contact-routes')
const addressRoutes = require('./Routes/address-routes')
const userRoutes = require('./Routes/user-routes')
const cartItemRoutes = require('./Routes/cartItem-routes')
const cartRoutes = require('./Routes/cart-routes')
const reviewRoutes = require('./Routes/review-routes')
const ordersRoutes = require('./Routes/orders-routes');
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser())
app.use(express.json())
app.use('/upload' , express.static('./upload'))

app.use('/products' , prodRoutes)
app.use('/contact' ,contactRoutes)
app.use('/address' , addressRoutes)
app.use('/user' ,userRoutes)
app.use('/cartItem' , cartItemRoutes)
app.use('/cart' , cartRoutes)
app.use('/review' , reviewRoutes)
app.use('/orders' , ordersRoutes)

app.get('/' , (req,res)=>{
  res.send("Home")
})


mongoose.connect('mongodb+srv://sagarsharmatechies:sagarsharmatechies@democluster.dlxyrkz.mongodb.net/?retryWrites=true&w=majority&appName=DemoCluster')
.then(app.listen(port , ()=>{
  
  console.log(`server is running at http://localhost:${port}`)
}))
.catch(err => console.log(err))
