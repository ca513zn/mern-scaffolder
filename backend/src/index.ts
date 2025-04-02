import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", router);

app.get("/", (_req, res) => {
  res.status(200).send("200");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
