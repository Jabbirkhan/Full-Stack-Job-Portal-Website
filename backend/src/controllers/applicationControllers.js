import { Application } from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";
import { Recruiter } from "../models/recruiterModel.js";
import { User } from "../models/userModel.js";
import { v2 as cloudinary } from 'cloudinary';

// user can apply for a job
const applyJob = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({success:false, message:"User not found!"});
        }

        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({success:false, message:"Job not found!"});
        }

        const recruiterId = job.recruiterData._id;
        const recruiter = await Recruiter.findById(recruiterId);
        if(!recruiter){
            return res.status(403).json({success:false, message:"Recruiter not found!"});
        }

        const resume = user.resume;

        const alreadyApplied = await Application.findOne({
            "userData._id": userId,
            "jobData._id": jobId
        });
        if(alreadyApplied){
            return res.status(400).json({success:false, message:"You have already applied for this job"});
        }

        const appliedJob = await Application.create({
            userData: user,
            jobData: job,
            recruiterData: recruiter,
            resume
        });
        if(!appliedJob){
            return res.status(400).json({success:false, message:"Job not applied"});
        }

        if(appliedJob){
            await Job.findByIdAndUpdate(jobId, {$inc: { totalApplicants: 1 }});
        }
        return res.status(200).json({success:true,message:"Job applied successfully", appliedJob});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

// user can view all applied jobs
const allAppliedJobs = async (req, res) => {
    try {
        const id = req.user._id;
        const applications = await Application.find({"userData._id": id});
        return res.status(200).json({success:true, message:"Applications fetched successfully", applications});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

// user can cancell an application
const cancelApplication = async (req, res) => {
    try {
        const applicationId = req.params.id;

        const application = await Application.findById(applicationId);
        if(!application){
            return res.status(403).json({success:false, message:"Application not found!"});
        }

        const userId = req.user._id;
        if(application.userData._id.toString() !== userId.toString()){
            return res.status(404).json({success:false, message:"You are not allowed to cancel this application"});
        }

        if(application.cancelled){
            return res.status(400).json({success:false, message:"Application already cancelled"});
        }

        const updatedStatus = await Application.findByIdAndUpdate(
            applicationId, 
            {
                status: "Cancelled", 
                cancelled: true,
                deleteAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
            }, 
            {new: true}
        );

        if(!updatedStatus){
            return res.status(400).json({success:false, message:"Application not cancelled"});
        }

        if(!application.cancelled){
            await Job.findByIdAndUpdate(application.jobData._id, {$inc: { totalApplicants: -1 }});
        }

        return res.status(200).json({success:true, message:"Application status updated successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

// recruiter can change application status
const changeApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.id;
        const application = await Application.findById(id);
        if(!application){
            return res.status(404).json({success:false, message:"Application not found!"});
        }

        const recruiterId = req.recruiter._id;
        if(application.recruiterData?._id.toString() !== recruiterId.toString()){
            return res.status(404).json({success:false, message:"You are not allowed to change the status"});
        }

        let deleteAt = null;

        if(status === 'Rejected'){
            deleteAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        }

        if(status === 'Accepted'){
            deleteAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        }

        const updatedStatus = await Application.findByIdAndUpdate(id, {status: status, deleteAt: deleteAt}, {new: true});
        return res.status(200).json({success:true, message:"Status updated successfully", updatedStatus});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

// recruiter can view all applicants
const allApplicants = async (req, res) => {
    try {
        const id = req.recruiter._id;
        const applicants = await Application.find({"recruiterData._id": id});
        return res.status(200).json({success:true, message:"Applications fetched successfully", applicants});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

export {
    applyJob,
    allAppliedJobs,
    cancelApplication,
    changeApplicationStatus,
    allApplicants
}