import jwt from "jsonwebtoken";



export function jwt_generation(userID : any , res : any ):string|void{
   try {
     const token = jwt.sign({userID} , process.env.JWT_KEY! ,{expiresIn:"7d"});
    res.cookie("jwt",token);
    return token ;
   } catch (error) {
    console.log("error while generating jwt :", error )
   }
}    