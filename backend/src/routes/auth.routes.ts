import { Router } from "express";
import { changeUserData, deleatUser, getAllUser, signIn, signUp, userInfo } from "../controller/auth.controller.js";
import { checkToken } from "../middleware/auth.middleware.js";


const route = Router();

route.post("/signup",signUp);

route.post("/signin",signIn);

route.put("/user",checkToken,changeUserData);

route.delete("/user",checkToken,deleatUser);

route.get("/user",checkToken,userInfo);

route.get("/users",checkToken,getAllUser);

export default route ;