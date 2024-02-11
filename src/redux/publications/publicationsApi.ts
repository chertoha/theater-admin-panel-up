import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";

export const publicationsApi = createApi({
  reducerPath: "publications",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getPublications: builder.query<any, any>({
      query: () => ({
        url: "/publications?page=0&size=10",
        method: "GET",
        // params: {},
      }),
    }),
  }),
});

export const { useGetPublicationsQuery } = publicationsApi;
