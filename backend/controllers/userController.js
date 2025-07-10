import UserModel from "../models/UserModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({
                message: "User not found",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                message: "Invalid credentials",
                success: false
            });
        }

        // If passwords match, generate token
        const token = createToken(user._id);
        res.json({
            success: true,
            token,
            message: "Login successful"
        });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Internal server error" });
    }
};



//Route for user registration
const userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.json({
        message: "User already exists",
        success: false
      });
    }

    // validating
    if (!validator.isEmail(email)) {
      return res.json({
        message: "Invalid email",
        success: false
      });
    }

    if (password.length < 8) {
      return res.json({
        message: "Generate a password with at least 8 characters",
        success: false
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal server error" });
  }
}

//Route for admin login
const adminLogin = async (req, res) => {
        try{
          const { email, password } = req.body;
          if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({
              success: true,
              token,
              message: "Admin logged in successfully"
            });
          }else{
            res.json({
              success: false,
              message: "Invalid admin credentials"
            });
          }
        }catch (error){
            console.log(error);
            res.json({
              success: false,
              message: "Internal server error"
            });
            
        }
}
export { loginUser, userRegistration, adminLogin };