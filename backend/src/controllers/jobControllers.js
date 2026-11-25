import { Job } from "../models/jobModel.js";
import { SavedJob } from "../models/savedJobModel.js";
import { Recruiter } from "./../models/recruiterModel.js";
import { User } from "./../models/userModel.js";

// recruiter can add job
const addJob = async (req, res) => {
    try {
        const id = req.recruiter._id;
        const recruiter = await Recruiter.findById(id);
        if (!recruiter) {
            return res.status(404).json({ success: false, message: "Recruiter not found" });
        }

        const { title, description, salary, jobType, experienceLevel, requirements, responsibilities, skills, lastDateToApply } = req.body
        if (!title || !description || !salary || !jobType || !experienceLevel || !requirements || !responsibilities || !skills || !lastDateToApply) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        if (new Date(lastDateToApply).getTime() < Date.now()) {
            return res.status(400).json({ success: false, message: "Last date to apply should be greater than current date" });
        }

        let parsedRequirements;
        let parsedResponsibilities;
        let parsedSkills;

        if (requirements) {
            try {
                parsedRequirements = JSON.parse(requirements);
            } catch (error) {
                parsedRequirements = requirements.split(",").map((req) => req.trim());
            }
        }
        if (responsibilities) {
            try {
                parsedResponsibilities = JSON.parse(responsibilities);
            } catch (error) {
                parsedResponsibilities = responsibilities.split(",").map((resp) => resp.trim());
            }
        }
        if (skills) {
            try {
                parsedSkills = JSON.parse(skills);
            } catch (error) {
                parsedSkills = skills.split(",").map((skill) => skill.trim());
            }
        }

        const job = await Job.create({
            recruiterData: recruiter,
            title,
            description,
            salary,
            jobType,
            experienceLevel,
            requirements: parsedRequirements,
            responsibilities: parsedResponsibilities,
            skills: parsedSkills,
            lastDateToApply,
        });
        if (!job) {
            return res.status(400).json({ success: false, message: "Job not created" });
        }
        return res.status(200).json({ success: true, message: "Job created successfully", job });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
        console.log(error);
    }
}

// user can view all jobs
const allJobs = async (req, res) => {
    try {
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 1;
        const title = req.query.title || null;
        const sortType = req.query.sort || null;

        if (page < 1) page = 1;
        if (limit < 1) limit = 1;

        const skip = (page - 1) * limit;

        const filter = {};

        const jobType = req.query.jobType ?
            Array.isArray(req.query.jobType) ?
                req.query.jobType
                :
                [req.query.jobType]
            : [];
        
        const jobLevel = req.query.jobLevel ?
            Array.isArray(req.query.jobLevel) ?
                req.query.jobLevel
                :
                [req.query.jobLevel]
            : [];
        
        if (title) filter.title = { $regex: title, $options: "i" };
        if (jobType.length > 0) filter.jobType = { $in: jobType };
        if (jobLevel.length > 0) filter.experienceLevel = { $in: jobLevel };

        let sort = { createdAt: -1 };
        if(sortType === 'Low-High') sort = { salary: 1 }
        if(sortType === 'High-Low') sort = { salary: -1 }

        const jobs = await Job.find(filter).sort(sort).skip(skip).limit(limit);
        const newJobs = await Job.find({}).sort({ createdAt: -1 }).limit(10);
        const totalJobs = await Job.countDocuments(filter);
        const totalPages = Math.ceil(totalJobs / limit);

        return res.status(200).json({ success: true, jobs, newJobs, totalJobs, totalPages, currentPage: page });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// recruiter can delete job
const deleteJob = async (req, res) => {
    try {
        const id = req.params.id;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found!" });
        }
        await Job.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Job deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// recruiter can view all posted jobs
const allPostedJobs = async (req, res) => {
    try {
        const id = req.recruiter._id; // recruiter id
        // recruiterData has recruiter id, so we have to match the recruiter id with recruiterData id
        const jobs = await Job.find({ "recruiterData._id": id });
        if (!jobs) {
            return res.status(400).json({ success: false, message: "No jobs found" });
        }
        return res.status(200).json({ success: true, message: "Jobs fetched successfully", jobs });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// recruiter can change job status
const changeJobStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found!" });
        }
        const updatedStatus = await Job.findByIdAndUpdate(id, { status: status }, { new: true });
        return res.status(200).json({ success: true, message: "Status updated successfully", updatedStatus });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// user can save a job
const saveAJob = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found!" });
        }

        const savedJob = await SavedJob.create({
            userData: user,
            jobData: job,
        });

        if (!savedJob) {
            return res.status(400).json({ success: false, message: "Job not saved" });
        }
        return res.status(200).json({ success: true, message: "Job saved successfully", savedJob });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// user can remove saved job
const removeSavedJob = async (req, res) => {
    try {
        const savedJobId = req.params.id;
        const savedJob = await SavedJob.findById(savedJobId);
        if (!savedJob) {
            return res.status(404).json({ success: false, message: "Saved job not found" });
        }
        const deletedSavedJob = await SavedJob.findByIdAndDelete(savedJobId);
        if (!deletedSavedJob) {
            return res.status(400).json({ success: false, message: "Saved job not deleted" });
        }
        return res.status(200).json({ success: true, message: "Saved job deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const allSavedJobs = async (req, res) => {
    try {
        const savedJobs = await SavedJob.find();
        return res.status(200).json({ success: true, savedJobs });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export {
    addJob,
    allJobs,
    deleteJob,
    allPostedJobs,
    changeJobStatus,
    saveAJob,
    removeSavedJob,
    allSavedJobs,
}