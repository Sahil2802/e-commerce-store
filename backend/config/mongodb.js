import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/e-commerce`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
