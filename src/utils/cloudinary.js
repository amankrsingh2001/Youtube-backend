import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const localFilePath = `public/temp/download.jpeg`

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been successfully
    // console.log("File uploaded on cloudinary",response.url)
    // console.log("This is the response we wanted to see",response);
    // console.log(error)
    console.log(localFilePath)
    fs.unlink(localFilePath, (error) => {
      if (error) {
        console.error('Error deleting file:', error);
      } else {
        console.log('File deleted successfully');
      }
    });
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temprory file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
