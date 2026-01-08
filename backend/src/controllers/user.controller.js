//  ye jo method banaya ye kisi na kisi url se hit ho yani run ho toe is ke liye hum banate hai router 
//   is ko app.js me import krnahai 

import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apierrors.js"
import { User } from "../models/user.model.js";
import { uploadonordinary } from "../utils/cloudinary.js"
import { apiresponce } from "../utils/apiresponsce.js";






//................... YE STEPS FOLLOW KIYE USRER REGISTER KRNE KE LIYE........

// STEPS HAI YE LOGIN KRNE KE LIYE 
// 1) GET USER DETAIL FROM FRONTEND 
// 2)VALIDATION-NOT EMPTY
// 3)CHEK IF THE USER ALREADY EXISTS:USERNAME ,EMAIL
// 4)CHEK FOR IMAG ,CHEK FOR AVATAR 
// 5)UPLOAD THEM TO CLOUDINARY,AVATAR
// 6)CREATE USER OBJECT- CREATE ENTRY IN DB
// 7)REMOVE PASSWORD AND REFRESH TOKEN NFIELD FROM RESPONSE
// 8)CHEK FOR USER CREATION
// 9)RETURN RES







const registeruser = asynchandler(async (req, res) => {
      //    return res.status(200).json({
      //         message:"ok"
      //     })


      const { username, email, password, fullname } = req.body
      console.log("Email:", email)


      //    validation chek 
      if (
            [fullname, email, username, password].some((field) => field?.trim() === "")
      ) {
            throw new ApiError(400, "all fields are required")
      }

      //      chek if user already exist 
      const existeduser = User.findOne({
            $or: [{ username }, { email }]
      })

      if (existeduser) {
            throw new ApiError(409, "user with email or username already exist ")
      }
      /////////////////4)CHEK FOR IMAG ,CHEK FOR AVATAR 
      //   multer request (.files) ki acces deta hai  
      const avatarlocalpath = req.files?.avatar[0]?.path;
      const coverimagelocalpath = req.files?.coverimage[0]?.path;

      if (!avatarlocalpath) {
            throw new ApiError(400, "avatar file is required")
      }

      /////////////////5)UPLOAD THEM TO CLOUDINARY,AVATAR
      const avatar = await uploadonordinary(avatarlocalpath);
      const coverimage = await uploadonordinary(coverimagelocalpath)

      if (avatar) {
            throw new ApiError(400, "avatar file is required")
      }

      ///////6)CREATE USER OBJECT- CREATE ENTRY IN DB

      const user=await user.create({
            fullname,
            avatar: avatar.Url,
            coverimage: coverimage?.Url || "",
            email,
            password,
            username:username.toLowerCase()
      })
                             
           /////CHEK FOR USER CREATION

     const createduser=await user.findById(user._id).select (
      "-password - refreshtoken"
     )
     if(!createduser){
      throw new ApiError(500,"something went wrong while registering the user")
     }

     return res.status(201).json(
      new apiresponce (200,createduser,"user registered successfully")
     )

})

export { registeruser }
