import orderModel from "../models/orderModel.js";
import UserModel from "../models/UserModel.js";
import razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();
//Global Variable
const currency = 'inr'
const deliveryCharge= 100

//Gateway initialize
const razorpayInstance = new razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET
})

//Placing orders using COD

const placeOrder = async(req, res) =>{
    try {
        const {userId, items, amount, address}= req.body;
       
        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethode:'COD',
            payment:'false',
            date:Date.now()
        }
        const neworder= new orderModel(orderData);
        await neworder.save();

        await UserModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({
            success: true,
            message: "Order Placed, Thank You!"
        })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}
//Placing orders using RazorPay

const placeOrderRazorPay = async(req, res) =>{
    try {
        const {userId, items, amount, address} = req.body;
        
        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethode:'Razorpay',
            payment:'false',
            date:Date.now()
        }
        const neworder= new orderModel(orderData);
        await neworder.save();

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: neworder._id.toString(),

        }

        await razorpayInstance.orders.create(options, (error, order)=>{
            if(error){
                console.log(error);
                return res.json({success:false, message: error.message})
            }
            res.json({success: true, order})
        })

    } catch (error) {
        console.log(error);
        return res.json({success:false, message: error.message})  
    }
}

const verifyRazorpay = async(req, res)=>{
    try {
        const {userId, razorpay_order_id } = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if(orderInfo.status === 'paid'){
            await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment: true});
            await UserModel.findByIdAndUpdate(userId, {cartData:{}});
            res.json({success: true, message: "Payment Successful"})
        }else{
            res.json({success: false, message: "Payment Failed"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}
//All order for admin panel

const allOrders = async(req, res)=>{
    try {
        const orders = await orderModel.find({})
     
        res.json({
            success: true,
            orders
        })
    } catch (error) {
         console.log(error);
        res.json({success:false, message:error.message})
    }
    
}
//All order for frontend

const userOrders = async(req, res)=>{
    try{
        const {userId}= req.body

        const orders= await orderModel.find({userId})
        res.json({
            success: true,
            orders
        })
    }catch(error){
             console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Update order
const updateStatus = async(req, res) =>{
        try {
            const {orderId, status} = req.body;
            
            await orderModel.findByIdAndUpdate(orderId, {status})

            res.json({
                success: true,
                message: "Status successfully Updated"
            })
        } catch (error) {
            console.log(error);
            res.json({success:false, message: error.message})
            
        }
}


export {placeOrder, placeOrderRazorPay, allOrders, userOrders, updateStatus, verifyRazorpay};