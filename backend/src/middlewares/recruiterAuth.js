import jwt from "jsonwebtoken";
import { Recruiter } from "../models/recruiterModel.js";

const adminAuth = async (req, res, next) => {
    try {
        let token;
        if(req.cookies?.jobPortalRecruiterToken){
            token = req.cookies.jobPortalRecruiterToken;
        }
        if(!token){
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const recruiter = await Recruiter.findById(decodedToken.id).select("-password");
        req.recruiter = recruiter
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: 'Unauthorized'});
    }
}

export default adminAuth;