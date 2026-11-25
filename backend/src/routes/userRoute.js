import { Router } from "express";
import { getProfile, handleGithubCallback, handleGoogleCallback, resetPassword, sendContactMessage, sendResetPasswordOtp, sendVerifyEmailOtp, updateProfile, userLogin, userLogout, userRegistration, userVerify, verifyEmailOtp, verifyResetPasswordOtp } from "../controllers/userControllers.js";
import passport from "passport";
import userAuth from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.js";
import { allAppliedJobs, applyJob, cancelApplication } from "../controllers/applicationControllers.js";
import { allJobs, removeSavedJob, saveAJob, allSavedJobs } from "../controllers/jobControllers.js";

const userRouter = Router();

userRouter.route('/register').post(userRegistration);
userRouter.route('/login').post(userLogin);
userRouter.route('/verify').get(userAuth, userVerify);
userRouter.route('/logout').post(userLogout);

userRouter.route('/send-verify-email-otp').get(userAuth, sendVerifyEmailOtp);
userRouter.route('/verify-email-otp').post(userAuth, verifyEmailOtp);
userRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
userRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
userRouter.route('/reset-password').post(resetPassword);

userRouter.route("/send-contact-message").post(userAuth, sendContactMessage);

userRouter.route('/profile').get(userAuth, getProfile);
userRouter.route('/update-profile').patch(userAuth, upload.fields([
    { name: "avatar", maxCount: 1 }, 
    { name: "resume", maxCount: 1 }]), 
updateProfile);

userRouter.route('/jobs').get(userAuth, allJobs);
userRouter.route('/apply-job/:id').post(userAuth, applyJob);
userRouter.route('/applied-jobs').get(userAuth, allAppliedJobs);
userRouter.route('/cancel-application/:id').patch(userAuth, cancelApplication);

userRouter.route('/save-job/:id').post(userAuth, saveAJob);
userRouter.route('/remove-saved-job/:id').delete(userAuth, removeSavedJob);
userRouter.route('/saved-job').get(userAuth, allSavedJobs);

// // Google and GitHub authentication routes (for production, without state parameter)
userRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] })); 
userRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// Callback routes for Google and GitHub authentication
userRouter.get('/google/callback', passport.authenticate('google', { session: false}), handleGoogleCallback);
userRouter.get('/github/callback', passport.authenticate('github', { session: false}), handleGithubCallback);

export default userRouter;