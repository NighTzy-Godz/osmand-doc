import { Router } from "express";
import multer from "multer";
import { storage } from "../cloudinary";
import { addTerritory } from "../controller/territoryController";

const upload = multer({ storage });

const app = Router();

const uploadFields = upload.fields([
  { name: "searchEndedImg", maxCount: 1 },
  { name: "toStartSearchImg", maxCount: 1 },
]);

app.post("/createSearch", uploadFields, addTerritory);

export default app;
