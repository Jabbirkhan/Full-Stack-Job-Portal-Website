import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobData: {
        type: Object,
        required: true
    },
    userData: {
        type: Object,
        required: true
    },
     recruiterData: {
        type: Object,
        required: true
     },
    resume: {
        type: String,
        required: true
    },
    status : {
        type: String,
        default: "Pending"
    },
    cancelled: {
        type: Boolean,
        default: false
    },
    deleteAt: {
        type: Date,
        default: null
    }
},{timestamps: true});

export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);