import { Router } from "express";
import { changeUserData, checkAuth, deleatUser, getAllUser, logout, signIn, signUp, userInfo } from "../controller/auth.controller.js";
import { checkToken } from "../middleware/auth.middleware.js";


const route = Router();

route.post("/signup",signUp);

route.post("/signin",signIn);

route.put("/user",checkToken,changeUserData);

route.delete("/user",checkToken,deleatUser);

route.get("/user",checkToken,userInfo);

route.get("/users",checkToken,getAllUser);

route.get("/check",checkToken,checkAuth)

route.get("/logout",logout)

export default route ;

