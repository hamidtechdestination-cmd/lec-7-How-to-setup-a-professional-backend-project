// import express from "express"
// import cors from "cors"
// import cookieparser from "cookie-parser"
// const app=express();

// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     Credentials:true
// }))

// app.use(express.json({limit:"16kb"}))
// app.use(express.urlencoded({extended:true,limit:"16kb"}))
// app.use(express.static("public"))

// //routers import 
// import userrouter from "./routes/user.routes.js"

// // routes declaration 
// // ye jo iddleware likha koe ba agar /users type kre ga to userrouter ka control mile jae ga wo mile ga user router se 
// app.use("/api/v1/users",userrouter)

// // http://localhost:8000/api/v1/users/register


// export{app}





import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))


// router import 
import userrouter from "./routes/user.routes.js"

// router declaration 
app.use("/api/v1/users", userrouter)

export { app }
