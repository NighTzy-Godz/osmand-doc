import mongoose, { Schema } from "mongoose";

const DB_URL = "mongodb://localhost:27017/mhic";
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to the database - Territory"))
  .catch((err) => console.log(`Error on Territory -- ${err}`));

interface ITerritory {
  territoryNum: number;
  servant: string;
  dateStart: Date;
  dateEnded: Date;
  searchEnded: string;
  toStartSearch: string;
  createdAt: Date;
  updatedAt: Date;
}

const territorySchema: Schema<ITerritory> = new Schema(
  {
    territoryNum: {
      type: Number,
      required: true,
      min: 1,
      max: 35,
    },

    servant: {
      type: String,
      required: true,
    },
    dateStart: {
      type: Date,
      required: true,
    },

    dateEnded: {
      type: Date,
      required: true,
    },

    searchEnded: {
      type: String,
      required: true,
    },

    toStartSearch: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Territory = mongoose.model<ITerritory>("Territory", territorySchema);

export default Territory;
