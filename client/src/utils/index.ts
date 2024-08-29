import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "sonner";

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
