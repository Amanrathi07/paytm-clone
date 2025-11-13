import express from "express";
import dotenv  from "dotenv" ;
import cors from "cors";
import authRoute from "./routes/auth.routes.js";
import db_Connect from "./lib/db.js";



dotenv.config( );

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/v1",authRoute)

app.listen(3000,()=>{
    db_Connect(process.env.MONGO_DB_URL!);
    console.log("server is running ");
})