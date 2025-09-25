import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to the database...");
  } catch (error) {
    console.log("Error connecting to the database:", error);
    throw error;
  }

};



export default connectDB;
