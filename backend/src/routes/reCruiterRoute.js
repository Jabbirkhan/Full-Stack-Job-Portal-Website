import { Router } from "express";
import upload from "../middlewares/multer.js";
import reCruiterAuth from "../middlewares/recruiterAuth.js";
import {
    getProfile, logoutReCruiter, reCruiterLogin, reCruiterRegister, resetPassword, sendResetPasswordOtp,
    updateProfile, verifyReCruiter, verifyResetPasswordOtp
} from "../controllers/reCruiterControllers.js";
import { addJob, allPostedJobs, changeJobStatus, deleteJob } from "../controllers/jobControllers.js";
import { allApplicants, changeApplicationStatus } from "../controllers/applicationControllers.js";

const reCruiterRouter = Router();

reCruiterRouter.route('/register').post(upload.single('companyLogo'), reCruiterRegister);
reCruiterRouter.route('/login').post(reCruiterLogin);
reCruiterRouter.route('/verify').get(reCruiterAuth, verifyReCruiter);
reCruiterRouter.route('/logout').post(logoutReCruiter);

reCruiterRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
reCruiterRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
reCruiterRouter.route('/reset-password').post(resetPassword);

reCruiterRouter.route('/profile').get(reCruiterAuth, getProfile);
reCruiterRouter.route('/update-profile').patch(reCruiterAuth, upload.single('companyLogo'), updateProfile);

reCruiterRouter.route('/add-job').post(reCruiterAuth, addJob);
reCruiterRouter.route('/all-posted-jobs').get(reCruiterAuth, allPostedJobs);
reCruiterRouter.route('/job-status/:id').patch(reCruiterAuth, changeJobStatus);
reCruiterRouter.route('/delete-job/:id').delete(reCruiterAuth, deleteJob);

reCruiterRouter.route('/all-applicants').get(reCruiterAuth, allApplicants);
reCruiterRouter.route('/application-status/:id').patch(reCruiterAuth, changeApplicationStatus);

export default reCruiterRouter;