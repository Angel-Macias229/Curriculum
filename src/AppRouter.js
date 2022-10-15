import React from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import UsersList from "./Components/UsersList";

export const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={Dashboard}
                    />
                    <Route
                        path="/users"
                        component={UsersList}
                    />
                </Switch>
            </div>
        </Router>
    )
}