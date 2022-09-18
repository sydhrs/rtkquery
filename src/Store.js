import React from "react";

import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./UsersApi";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath] : usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})
setupListeners(store.dispatch)