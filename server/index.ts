import dotenv from "dotenv";

dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import territoryRoute from "./routes/territoryRoutes";

const PORT = 8080;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/api/territory", territoryRoute);

app.listen(PORT, () => console.log("Hello from PORT 8080"));
