import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Users from "./Users";
import Movies from "./Movies";
import SpaceX from "./SpaceX";
import Form from "./Form";

const AppRoutes = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route
                exact
                path={"/"}
                element={<Users />}
               />

               <Route
                exact
                path={"/movies"}
                element={<Movies />}
               />

               <Route
                   exact
                   path={"/spacex"}
                   element={<SpaceX />}
               />

               <Route
                   exact
                   path={"/form"}
                   element={<Form />}
               />
           </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;