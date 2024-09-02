import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);
const territoryApi = createApi({
  reducerPath: "territory",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/territory`,
  }),
  tagTypes: ["Territory"],
  endpoints(builder) {
    return {
      getSearchHistory: builder.query({
        providesTags: ["Territory"],
        query: () => {
          return {
            url: "/getSearchHistory",
          };
        },
      }),

      addSearchHistory: builder.mutation({
        invalidatesTags: ["Territory"],
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

export const { useAddSearchHistoryMutation, useGetSearchHistoryQuery } =
  territoryApi;
export default territoryApi;
