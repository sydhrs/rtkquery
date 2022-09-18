import React from "react";

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const usersApi = createApi({
    reducerPath: "Users",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        Users: builder.query({
            query: () => `users`
        }),
        SingleUser: builder.query({
            query: (queryParams = "") => `users/${queryParams}`
        })
    })
})

export const {useUsersQuery, useSingleUserQuery} = usersApi