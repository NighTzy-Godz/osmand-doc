import mongoose, { Schema } from "mongoose";

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/mhic";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to the database - Territory"))
  .catch((err) => console.log(`Error on Territory -- ${err}`));

interface ITerritory {
  groupNum: GroupNum;
  territoryNum: number;
  servant: string;
  searchDate: Date;
  terrNumEnded?: Date;
  searchEndedImg: string;
  toStartSearchImg: string;
  createdAt: Date;
  updatedAt: Date;
}
export enum GroupNum {
  G1 = "Group 1",
  G2 = "Group 2",
  G3 = "Group 3",
  G4 = "Group 4",
}

const territorySchema: Schema<ITerritory> = new Schema(
  {
    groupNum: {
      type: String,
      enum: Object.values(GroupNum),
      required: true,
    },

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

    searchDate: {
      type: Date,
      required: true,
    },

    terrNumEnded: {
      type: Date,
    },

    searchEndedImg: {
      type: String,
      required: true,
    },

    toStartSearchImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Territory = mongoose.model<ITerritory>("Territory", territorySchema);

export default Territory;
