import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoin from "./pages/CreatePoint";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoin} path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;