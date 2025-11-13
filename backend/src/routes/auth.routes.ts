import { Router } from "express";
import { changeUserData, deleatUser, getAllUser, signIn, signUp } from "../controller/auth.controller.js";
import { checkToken } from "../middleware/auth.middleware.js";


const route = Router();

route.post("/signup",signUp);

route.post("/signin",signIn);

route.put("/user",checkToken,changeUserData);

route.delete("/user",checkToken,deleatUser)

route.get("/users",checkToken,getAllUser);

export default route ;