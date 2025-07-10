import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try{
    const {token} = req.headers
    if(!token){
        return res.json({ success: false, message: "NOT AUTHORIZED" });
    }
    const token_Decode= jwt.verify(token, process.env.JWT_SECRET);
    if(token_Decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.json({ success: false, message: "NOT AUTHORIZED" });
    }
    next();
  }catch (error) {
    console.error("Error in adminAuth middleware:", error);
    res.json({ success: false, message: "Unauthorized access" });
  }
}

export default adminAuth;