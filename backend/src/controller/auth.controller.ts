import bcrypt from "bcryptjs";
import type{Request , Response} from "express";
import userModel from "../model/auth.model.js";
import jwt_generate from "../utils/jwt.utils.js";


export async function signIn(req:Request , res: Response){
    try {
      
        const {name , email , password} =req.body ;
        const existingUser = await userModel.findOne({email:email});
        if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

        if (existingUser) return res.status(404).json({message:"user alrady  exist "}) 
        const hassPassword = await bcrypt.hash(password,5);
        const newUser = new userModel({
            name,
            email,
            password:hassPassword
        })
        await newUser.save();
        jwt_generate(newUser._id,res);
            
            return res.status(200).json({
                message:"User registered successfully"
            })
       
        
    } catch (error) {
        console.log("error in fun signIN()",error) ;
    }
}

