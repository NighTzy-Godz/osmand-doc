import dotenv from "dotenv";

dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import territoryRoute from "./routes/territoryRoutes";
import mongoose, { ConnectOptions } from "mongoose";
import axios from "axios";

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
const PROD_URL = process.env.PROD_URL;

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/api/territory", territoryRoute);

mongoose
  .connect(DB_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  } as ConnectOptions)
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log("Error on DB Connection - ", err));

const keepDBAlive = async () => {
  try {
    const db = mongoose.connection;
    await db.collection("territory").findOne({});
    console.log("Kept the DB alive");
  } catch (error) {
    console.log("Error on Keeping the DB ALive - ", error);
  }
};

const keepBackendAlive = async () => {
  try {
    await axios.get(`${PROD_URL}/healthcheck`);
    console.log("Backend keep-alive");
  } catch (error) {
    console.log("Error on Backend alive - ", error);
  }
};

const runWarmUp = () => {
  keepBackendAlive();
  keepDBAlive();
};

setInterval(runWarmUp, 500000);

runWarmUp();

app.listen(PORT, () => console.log("Hello from PORT 8080"));
