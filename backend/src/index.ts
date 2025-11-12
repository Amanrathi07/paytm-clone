import express from "express" ;
import dotenv from "dotenv" ;
import cros from "cors";

import authRouter from "./routes/auth.routes.js"

import { db_connec } from "./lib/db.js";

dotenv.config();


const port:number = Number(process.env.SERVER_PORT ) || 3000;
const app = express();

app.use(express.json());
app.use(cros());

app.use("/auth/v1",authRouter)


app.listen(port ,()=>{
    console.log("server is running on :",port);
    db_connec(process.env.MONGO_URL!)
})