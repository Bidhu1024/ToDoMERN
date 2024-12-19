const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to Mongo");
  } catch (err) {
    console.log("Database connection failed with error", err);
    process.exit(1);
  }
};
module.exports = connectDB;
