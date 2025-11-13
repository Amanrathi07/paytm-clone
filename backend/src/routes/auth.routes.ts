import { Router } from "express";

import type { Request,Response } from "express";
import { signIn } from "../controller/auth.controller.js";


const route = Router();

route.post("/sigin",signIn);
route.get("/",(req:Request , res:Response)=>{
    console.log(req.body);
    return res.status(200).json({
        message:"it working"
    })
})

export default route ;