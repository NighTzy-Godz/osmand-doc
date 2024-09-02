import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "sonner";
import territoryNums from "../data/territoryNum";

export function renderError(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  if (error && "status" in error) {
    toast.error("Unexpected Error Happened");
  }
  if (error && "originalStatus" in error) {
    if (error.originalStatus >= 500) {
      toast.error("Unexpected Error Happened");
    } else {
      toast.error(error.data);
    }
  }
}

export function renderTerritoryBrgy(terrNum: number) {
  const index = territoryNums.findIndex((item) => item.id === terrNum);
  const foundTerr = territoryNums[index];

  return foundTerr.name;
}
