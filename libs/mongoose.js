import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" ☑️☑️Mongoose Connection: ");
  } catch (e) {
    console.error("❌ Mongoose Error: " + e.message);
  }
};

export default connectMongo;
