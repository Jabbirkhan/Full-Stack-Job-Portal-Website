import { v2 as cloudinary } from "cloudinary";
import { Application } from "../models/applicationModel.js";

export const deleteExpiredApplications = async () => {
    try {

        const expiredApplications = await Application.find({
            deleteAt: { $lte: new Date() }
        });

        for (const application of expiredApplications) {

            // Delete resume from Cloudinary
            if (application.resume) {
                const publicId = application.resume.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(publicId);
            }

            await Application.findByIdAndDelete(application._id);
        }

        // console.log(`${expiredApplications.length} expired applications deleted`);

    } catch (error) {
        console.error(error);
    }
};