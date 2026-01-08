// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import connectDB from "./db/index.js";

// const app = express();

// app.on("error", (error) => {
//   console.log("ERROR:", error);
//   throw error;
// });

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(
//         ` Server is running on port ${process.env.PORT}`
//       );
//     });
//   })
//   .catch((err) => {
//     console.log("MongoDB connection failed !!", err);
//   });



import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/index.js"
import { app } from "./app.js"   // ⭐ YAHAN SE APP AAYE GA

app.on("error", (error) => {
  console.log("ERROR:", error)
  throw error
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err)
  })
