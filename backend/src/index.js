import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/index.js";

const app = express();

app.on("error", (error) => {
  console.log("ERROR:", error);
  throw error;
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        ` Server is running on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });
