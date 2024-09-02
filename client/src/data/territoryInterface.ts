import { TerritoryData } from "./territoryNum";

export interface ITerritory {
  _id: string;
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

export interface CreateTerritorySearch {
  groupNum: GroupNum;
  territoryNum: number;
  servant: string;
  searchEndedImg: FileList;
  toStartSearchImg: FileList;
}
