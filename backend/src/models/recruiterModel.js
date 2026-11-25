import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        index: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    companyLogo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    companySize: {
        type: String,
        default: null
    },
    companyWebsite: {
        type: String,
        default: null
    },
    companyBio: {
        type: String,
        default: null,
    },
    industry: {
        type: String,
        default: null,
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    verifyOtp: {
        type: String,
        default: ''
    },
    verifyOtpExpiresAt: {
        type: Date,
        default: null
    },
    verifyResetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpiresAt: {
        type: Date,
        default: null
    }
},{timestamps: true});

export const Recruiter = mongoose.models.Recruiter || mongoose.model('Recruiter', recruiterSchema);