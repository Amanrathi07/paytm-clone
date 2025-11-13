import { Router } from "express";

import type { Request,Response } from "express";


const route = Router();

route.get("/", (req: Request, res: Response) => {
  console.log("endpoint working");
  res.json({
    "message":"hello"
  })
});


export default route ;