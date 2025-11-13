import { Router } from "express";
import { changeUserData, deleatUser, getAllUser, signIn, signUp } from "../controller/auth.controller.js";


const route = Router();

route.post("/signup",signUp);

route.post("/signin",signIn);

route.put("/user",changeUserData);

route.delete("/user",deleatUser)

route.get("/user",getAllUser);

export default route ;