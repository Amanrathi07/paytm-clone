import express from "express" ;
import dotenv from "dotenv" ;
import cros from "cors";

import { db_connec } from "./lib/db.js";

dotenv.config();


const port:number = Number(process.env.SERVER_PORT ) || 3000;
const app = express();

app.use(express.json());
app.use(cros());

app.get("/",(req,res)=>{
    res.json("hii it working");
})


app.listen(port ,()=>{
    console.log("server is running on :",port);
    db_connec(process.env.MONGO_URL!)
})