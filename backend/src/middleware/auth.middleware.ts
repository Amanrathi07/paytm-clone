import type { NextFunction ,Request ,Response} from "express";
import  jwt  from "jsonwebtoken";

export async function checkToken(req:Request,res:Response,next:NextFunction ){
  try {
    if (!req.cookies?.jwt) {
     return res.status(401).json({ message: "Token missing" });
    }
    const myJwt = req.cookies.jwt ;
    

    const decoded = jwt.verify(myJwt , process.env.JWT_KEY!)as{id:string};

    if(decoded){
        //@ts-ignore
        req.id = decoded.userID ;
        //@ts-ignore
        console.log("i add req.id" , req.id)
        return next();
    }
    return res.status(404).json({message:"jwt dosn't match "})
  } catch (error) {
    console.log("checkToken function error", error);
    return res.status(500).json({message:"internal server error"})
  }
}