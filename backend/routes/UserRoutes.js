import express from 'express';
import { loginUser, userRegistration, adminLogin } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', userRegistration);
userRouter.post('/admin', adminLogin);

export default userRouter;