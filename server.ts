import dotenv from "dotenv";
import { dbConnect } from "./config/dbconnect";
const express = require("express");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));
dbConnect();
