import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./router/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://reviewblog-backend.vercel.app/"],
    credentials: true,
  })
);
app.use(express.json()); // allows us to parse income requests :req.body
app.use(cookieParser()); //allows us to parse incoming cookies
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Listening on port: ${PORT}`);
});
