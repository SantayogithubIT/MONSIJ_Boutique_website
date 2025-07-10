import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/UserRoutes.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoutes.js'
dotenv.config()

//App Coinfig
const app = express()
const PORT = process.env.PORT || 4000
// Connect to Local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Local'))
.catch(err => console.error('❌ MongoDB connection error:', err));

connectCloudinary();

//Middleware
app.use(express.json())
app.use(cors())

//Api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(PORT, () => {
    console.log(`Server is running on port `+ PORT)
})