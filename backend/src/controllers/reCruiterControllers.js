import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import { Recruiter } from "../models/recruiterModel.js";
import uploadOnCloundinary from "../utils/cloudinary.js";
import transporter from "../config/nodemailer.js";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

const reCruiterRegister = async (req, res) => {
  try {
    const { companyName, location, email, password } = req.body;
    if (!companyName || !location || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    if(!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    // Here we match the received email with ADMN_EMAIL
    if(email !== process.env.ADMIN_EMAIL){
      return res.status(400).json({ success: false, message: "Email not matched with Admin Email!" });
    }

    const recruiterExist = await Recruiter.findOne({email});

    // Here we check if length of educator is more than one
    const recruiters = await Recruiter.find();
    if (recruiterExist && recruiters.length > 0) {
      return res.status(400).json({ success: false, message: "Admin already registered, please login!" });
    }

    const logoPath = req.file ? req.file.path : null;
    if(!logoPath){
        return res.status(400).json({ success: false, message: "Logo is required" });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const uploadedLogo = await uploadOnCloundinary(logoPath);
    if (!uploadedLogo) {
      return res.status(500).json({ success: false, message: "Error while uploading logo" });
    }

    const recruiter = await Recruiter.create({
      companyName,
      companyLogo: uploadedLogo.secure_url,
      location,
      email,
      password: hashedPassword,
    });
    if (!recruiter) {
      return res.status(500).json({ success: false, message: "Error while creating recruiter account" });
    }
    return res.status(201).json({ success: true, message: "Recruiter account created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const reCruiterLogin = async (req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message: "Email and password are required"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Invalid email format"});
        }
        const recruiter = await Recruiter.findOne({email});
        if(!recruiter){
            return res.status(400).json({success: false, message: "Recruiter not exist!"});
        }
        const isMatch = await bcrypt.compare(password, recruiter.password);
        if(!isMatch){
            return res.status(401).json({success:false, message:"Password is incorrect"});
        }
        const jobPortalRecruiterToken = createToken(recruiter._id);

        const options = {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === "production", // Set secure flag in production
            sameSite: "strict", // Prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }

        return res.status(200)
        .cookie("jobPortalRecruiterToken", jobPortalRecruiterToken, options)
        .json({success: true, message: "Recruiter logged in successfully", role:"recruiter"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const verifyReCruiter = (req, res) => {
    try {
        return res.status(200).json({success: true, message: "Recruiter is authenticated", role:"recruiter"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

const logoutReCruiter = (req, res) => {
    try {
        res.clearCookie("jobPortalRecruiterToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        return res.status(200).json({success: true, message: "Recruiter logged out successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

const getProfile = async (req,res) => {
  try {
    const recruiter = await Recruiter.findById(req.recruiter._id).select("-password");
    if(!recruiter){
      return res.status(404).json({success:false, message:"Recruiter not found"});
    }
    return res.status(200).json({success:true, message:"Profile fetched successfully", profile: recruiter});
  } catch (error) {
    return res.status(500).json({success:false, message:error.message});
  }
}

const updateProfile = async (req,res) => {
  try {
    const { companyName, companyWebsite, industry, companySize, location, companyBio } = req.body;
    const recruiter = await Recruiter.findById(req.recruiter._id).select("-password");
    if(!recruiter){
      return res.status(404).json({success:false, message:"Recruiter not found"});
    }

    const logoPath = req.file ? req.file.path : null;

    let finalLogo = recruiter.companyLogo;
    if(logoPath){
      if(recruiter.companyLogo){
        const publicId = recruiter.companyLogo.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
      }

      const uploadedLogo = await uploadOnCloundinary(logoPath);
      finalLogo = uploadedLogo ? uploadedLogo.secure_url : recruiter.companyLogo;
    }

    const updatedRecruiter = await Recruiter.findByIdAndUpdate(req.recruiter._id, {
      companyName: companyName ? companyName : recruiter.companyName,
      companyWebsite: companyWebsite ? companyWebsite : recruiter.companyWebsite,
      industry: industry ? industry : recruiter.industry,
      location: location ? location : recruiter.location,
      companySize: companySize ? companySize : recruiter.companySize,
      companyBio: companyBio ? companyBio : recruiter.companyBio,
      companyLogo: finalLogo ? finalLogo : recruiter.companyLogo,
    }, { new: true }).select("-password");

    if(!updatedRecruiter){
      return res.status(404).json({success:false, message:"Recruiter not updated"});
    }

    return res.status(200).json({success:true, message:"Profile updated successfully", updatedProfile: updatedRecruiter});
  } catch (error) {
    return res.status(500).json({success:false, message:error.message});
  }
}

// Send OTP to reset password
const sendResetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const recruiter = await Recruiter.findOne({ email });
    if (!recruiter) {
      return res.status(404).json({ success: false, message: "recruiter not found!" });
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    recruiter.verifyResetOtp = otp;
    recruiter.resetOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await recruiter.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: recruiter.email,
      subject: "Reset password OTP from LMS",
      text: `Your OTP for reset password is this ${otp}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Verify OTP to reset password
const verifyResetPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }
    const recruiter = await Recruiter.findOne({email});
    if (!recruiter) {
      return res.status(404).json({ success: false, message: "recruiter not found" });
    }
    if (!recruiter.resetOtpExpiresAt || Date.now() > recruiter.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(recruiter.verifyResetOtp === '' || recruiter.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// recruiter can reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!newPassword || !email || !otp) {
      return res.status(400).json({ success: false, message: "Email, Otp and password are required!" });
    }
    const recruiter = await Recruiter.findOne({email});
    if (!recruiter) {
      return res.status(404).json({ success: false, message: "recruiter not found" });
    }

    if (!recruiter.resetOtpExpiresAt || Date.now() > recruiter.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(recruiter.verifyResetOtp === '' || recruiter.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    recruiter.password = hashedPassword;

    recruiter.verifyResetOtp = "";
    recruiter.resetOtpExpiresAt = null;

    await recruiter.save();
    
    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {
    reCruiterRegister,
    reCruiterLogin,
    verifyReCruiter,
    logoutReCruiter,
    getProfile,
  updateProfile,
  sendResetPasswordOtp, verifyResetPasswordOtp, resetPassword,
};
