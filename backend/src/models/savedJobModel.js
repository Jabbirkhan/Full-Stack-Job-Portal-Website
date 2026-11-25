import mongoose from "mongoose";

const savedJobSchema = new mongoose.Schema({
    jobData: {
        type: Object,
        required: true
    },
    userData: {
        type: Object,
        required: true
    },
},{timestamps:true});

export const SavedJob = mongoose.models.SavedJob || mongoose.model('SavedJob', savedJobSchema);