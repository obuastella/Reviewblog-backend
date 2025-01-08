import dotenv from "dotenv";
import { dbConnect } from "./config/dbconnect";
const express = require("express");
import { Request, Response } from "express";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
require("./prod")(app);
//health check
app.get("/api/", (req: Request, res: Response) => {
  res.status(200).send("ReviewBlog Backend!");
});

// start server
app.listen(port, () => console.log(`Server listening on port ${port}...`));
dbConnect();
