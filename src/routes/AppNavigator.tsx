import React from 'react';
import { Switch, Route } from "react-router-dom"
import { map } from "lodash"
import ProtectedRoute from "./ProtectedRoutes"
import { publicRoutes } from "./publicRoutes"
import { privateRoutes } from "./privateRoutes"
import { RouteType } from "./types"

export default function AppNavigator(){
    return (
        <Switch>
            {
                map(publicRoutes, (publicRoute:RouteType)=> (
                    <Route exact {...publicRoute} />
                ))
            }
            {
                map(privateRoutes, (privateRoute:RouteType)=> (
                    <ProtectedRoute exact {...privateRoute} />
                ))
            }
        </Switch>
    )
}