import { Router } from "express";
import { checkToken } from "../middleware/auth.middleware.js";
import { transfer } from "../controller/account.controller.js";

const route = Router();

route.post("/transfer",checkToken,transfer)

export default route ;