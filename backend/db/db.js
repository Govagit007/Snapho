// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://venuakkamgari:venu@snapho.kix7ore.mongodb.net/<yourDB>?retryWrites=true&w=majority&appName=snapho";

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
