import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv  from "dotenv" ;
import cors from "cors";
import db_Connect from "./lib/db.js";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import accountRoute from "./routes/account.routes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config( );

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,  
    credentials: true,
  })
);




app.use(cookieParser( ))
app.use("/auth/v1",authRoute)
app.use("/transfer/v1",accountRoute)

app.get("/logout",(req ,res)=>{
  console.log("logout")
  res.clearCookie("jwt");
  return res.status(200).json({ message: "Logged out" });
})



if (process.env.NODE_ENV === "production") {

  const frontendPath = path.join(__dirname, "../../frontend/dist");

  console.log("Serving static build from:", frontendPath);

  app.use(express.static(frontendPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}








const port:number = Number(process.env.SERVER_PORT)  ; 

app.listen(port,()=>{
    db_Connect(process.env.MONGO_DB_URL!);
    console.log(`Server running at http://localhost:${port}`);

})