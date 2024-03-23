import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstane = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME} `
    );
    console.log(
      `MongoDB connected!! DB HOST: ${connectionInstane.connection.host}`
    );
    // console.log(connectionInstane);
  } catch (error) {
    console.log("Mongo DB connection falied", error);
    process.exit(1);
  }
};

export default connectDB;
