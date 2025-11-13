import bcrypt from "bcryptjs";
import type{Request , Response} from "express";
import userModel from "../model/auth.model.js";
import jwt_generate from "../utils/jwt.utils.js";


export async function signIn(req:Request , res: Response){
    try {
      
        const {name , email , password} =req.body ;
        const hassPassword = await bcrypt.hash(password,5);
        const newUser = await new userModel({
            name,
            email,
            password:hassPassword
        })
        if (newUser){
            jwt_generate(newUser._id,res);
            await newUser.save();
            return res.status(200).json({
                message:"New User has been successfully added"
            })
        }else{
            return res.status(404).json({
                message:"can't add user "
            })
        }
    } catch (error) {
        console.log("error in fun signIN()",error) ;
    }
}

