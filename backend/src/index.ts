import express from "express";
import dotenv  from "dotenv" ;
import cors from "cors";
import db_Connect from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import accountRoute from "./routes/account.routes.js";

dotenv.config( );

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use("/auth/v1",authRoute)
app.use("/transfer/v1",accountRoute)

const port:number = Number(process.env.SERVER_PORT)  ; 

app.listen(port,()=>{
    db_Connect(process.env.MONGO_DB_URL!);
    console.log("server is running ");
})