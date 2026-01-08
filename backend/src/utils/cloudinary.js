import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

                            //  ye acces de gi file ko upload krne ke liye 
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINAY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });


const uploadonordinary=async (localfilepath)=>{
    try {
        if (!localfilepath) return null
        //upload  the file on the cloudinary
      const responce=await  cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully on the cloudinary
        console.log("file is uploaded on the cloudinary ",responce.url)
        return responce;
    } 
    catch (error) {
        //remove the locally saved temporary file as the uploaded operationgot failed   
        fs.unlinkSync(localfilepath) 
        return null;
    }
}
                    //   on website 
cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    {public_id:"olympic_flag"},
    function(error,result){console.log(result);}
);



export {uploadonordinary}