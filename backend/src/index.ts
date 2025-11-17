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
app.use("/v1/auth",authRoute)
app.use("/v1/transfer",accountRoute)




if (process.env.NODE_ENV === "production") {

  const frontendPath = path.join(__dirname, "../../frontend/dist");

  console.log("Serving static build from:", frontendPath);

  app.use(express.static(frontendPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}




const port = process.env.PORT || 3000;

app.listen(port, () => {
  db_Connect(process.env.MONGO_DB_URL!);
  console.log(`Server running at http://localhost:${port}`);
});
