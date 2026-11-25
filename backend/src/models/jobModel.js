import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    recruiterData: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobType : {
        type: String,
        required: true
    },
    experienceLevel: {
        type: String,
        required: true
    },
    requirements: {
        type: Array,
        required: true
    },
    responsibilities: {
        type: Array,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    lastDateToApply : {
        type: Date,
        required: true
    },
    totalApplicants: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

export const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);