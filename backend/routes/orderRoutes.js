import express from 'express'
import { placeOrder,placeOrderRazorPay, allOrders, userOrders, updateStatus, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js' 

const orderRouter = express.Router();
//Admin only
orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

//Payment metode
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/razorpay',authUser, placeOrderRazorPay);


//user feature
orderRouter.post('/userorders', authUser, userOrders);

//verify Pay
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);


export default orderRouter;