import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen"

const Stack = createStackNavigator()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />

                

                <Stack.Screen
                    name="DrawerNavigation"
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation