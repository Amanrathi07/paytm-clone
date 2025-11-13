import jwt from "jsonwebtoken";
import type { Response } from "express";

export default async function jwt_generate(userID:any,res:Response){

    try{
        const token = jwt.sign({userID},process.env.JWT_KEY!);
        return res.cookie("jwt",token);
        
    }catch(e){
        console.log("error happen at jwt_generate function :", e);
    }
}