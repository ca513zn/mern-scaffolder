import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production";

connectDB();

app.use(
  cors({
    origin: isProd ? "https://pricequalityindex.com" : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.get("/", (_req, res) => {
  res.status(200).send("200");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
