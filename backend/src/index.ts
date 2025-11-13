import express from "express";
import dotenv  from "dotenv" ;
import cors from "cors";
import authRoute from "./routes/auth.routes.js";



dotenv.config( );

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/v1",authRoute)

app.listen(3002,()=>{
    console.log("server is running ")
})