import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloundinary = async (path) => {
    try {
        if(!path){
            return null;
        }
        const response = await cloudinary.uploader.upload(path, 
            { 
                resource_type: 'auto',
                folder: 'jobPortalImages',
            }
        );
        fs.unlinkSync(path);
        return response;
    } catch (error) {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        return null; // important
    }
}

export const uploadPdfToCloundinary = async (path) => {
    try {
        if(!path){
            return null;
        }
        const response = await cloudinary.uploader.upload(path, 
            { 
                resource_type: 'raw',
                folder: 'jobPortalResumes',
            }
        );
        fs.unlinkSync(path);
        return response;
    } catch (error) {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        return null; // important
    }
}

export default uploadOnCloundinary;