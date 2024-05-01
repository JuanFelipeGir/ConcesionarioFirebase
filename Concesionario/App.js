import 'react-native-gesture-handler';
import React from 'react'
import Contact from './src/screens/Contact'
import Catalog from './src/screens/SubScreens/VehiclesCatalog/Catalog'
import Vehicle from './src/screens/SubScreens/VehiclesCatalog/Vehicle'
import VehicleList from './src/screens/SubScreens/VehiclesCatalog/VehicleList'
import Confirm from './src/screens/SubScreens/DrivingTestRequest/Confirm'
import DealsAndOffers from './src/screens/DealsAndOffers'
import DrivingTestRequest from './src/screens/DrivingTestRequest'
import ServiceHistory from './src/screens/ServiceHistory'
import VehiclesCatalog from './src/screens/VehiclesCatalog'
import VehiclesSearch from './src/screens/VehiclesSearch'
import WorkShopService from './src/screens/WorkShopService'
import HomeScreen from './src/screens/Home/HomeScreen'
import Home from './src/screens/Home/Home'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack= createStackNavigator();
const App = () => {

  return (
    <>
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="DrivingTestRequest" component={DrivingTestRequest}/>
            <Stack.Screen name="Confirm" component={Confirm}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="DealsAndOffers" component={DealsAndOffers}/>
            <Stack.Screen name="ServiceHistory" component={ServiceHistory}/>
            <Stack.Screen name="VehiclesCatalog" component={VehiclesCatalog}/>
            <Stack.Screen name="Catalog"component={Catalog}/>
            <Stack.Screen name="Vehicle" component={Vehicle}/>
            <Stack.Screen name="VehicleList"component={VehicleList}/>
            <Stack.Screen name="VehiclesSearch" component={VehiclesSearch}/>
            <Stack.Screen name="WorkShopService" component={WorkShopService}/>
            <Stack.Screen name="Home" component={Home}/>

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
    </>
  )
}

export default App
