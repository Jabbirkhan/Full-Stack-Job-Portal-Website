import jwt from 'jsonwebtoken';
import { User } from "./../models/userModel.js";

const userAuth = async (req, res, next) => {
    try {
        let token;
        if(req.cookies.jobPortalUserToken){
            token = req.cookies.jobPortalUserToken;
        }
        if(!token){
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.id).select('-password');
        if(!user){
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
        req.user = user; // Attach user to request object for use in controllers
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: 'Unauthorized'});
    }
}

export default userAuth;