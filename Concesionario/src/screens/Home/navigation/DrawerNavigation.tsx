import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import DrivingTestRequest from "../../DrivingTestRequest";

import Home from "../Home";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator
            initialRouteName="HomeScreen"
        >
            <Drawer.Screen
                name="Home"
                component={Home}   
            />

            <Drawer.Screen
                name="DrivingTestRequest"
                component={DrivingTestRequest}
            />
            
        </Drawer.Navigator>
    )
}