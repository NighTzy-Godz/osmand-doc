import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const territoryApi = createApi({
  reducerPath: "territory",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/territory",
  }),

  endpoints(builder) {
    return {
      addSearchHistory: builder.mutation({
        query: (body) => {
          return {
            body,
            url: "/createSearch",
            method: "POST",
          };
        },
      }),
    };
  },
});

export const { useAddSearchHistoryMutation } = territoryApi;
export default territoryApi;
