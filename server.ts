import dotenv from "dotenv";
const express = require("express");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.listen(() => console.log(`Server listening on port ${port}...`));
