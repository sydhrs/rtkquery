import React from "react";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SPACEX_LAUNCHES} from "./GraphQlApiPaths";

export const SpaceXApi = createApi({
    reducerPath: "SpaceX",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spacex.land/graphql/"
    }),
    endpoints: (builder) => ({
        SpaceXLaunches: builder.mutation({
            query: () => `${SPACEX_LAUNCHES}`
            // query: (body) => ({
            //     query: "",
            //     method: "POST",
            //     headers: {"Content-Type" : "application/json"},
            //     body: JSON.stringify({query: SPACEX_LAUNCHES})
            // })
        })
    })
})

export const {useSpaceXApiMutation} = SpaceXApi