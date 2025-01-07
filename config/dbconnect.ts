import dotenv from "dotenv";
dotenv.config();
const mongoose = require("mongoose");

export const dbConnect = async () => {
  if (process.env.MongoUri) {
    try {
      await mongoose.connect(process.env.MongoUri as string);
      console.log("Mongodb connected successfully!");
    } catch (error) {
      console.log("An error occured connecting to MongoDB: " + error);
    }
  }
};
