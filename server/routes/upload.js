const express=require("express");
const multer=require("multer");
const cloudinary=require("cloudinary").v2;
const streamifier=require("streamifier");

require("dotenv").config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

//Multer storage configuration  
const storage=multer.memoryStorage();
const upload=multer({storage:storage});

const router=express.Router();

//Upload route
router.post("/",upload.single("image"),async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({message:"No image file uploaded"});
        }

        //Function to handle the stream upload to Cloudinary
        const streamUpload=(fileBuffer)=>{
            return new Promise((resolve,reject)=>{
                const stream=cloudinary.uploader.upload_stream(
                    (error,result)=>{
                        if(error){
                            reject(error);
                        }else{
                            resolve(result);
                        }
                    }
                );

                //Use streamifier to convert file buffer to stream
                streamifier.createReadStream(fileBuffer).pipe(stream);
            });
        };

        //Call the streamUpload function 
        const result=await streamUpload(req.file.buffer);

        //Respond with the uploaded image URL
        res.json({imageUrl:result.secure_url});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
});

module.exports = router;



