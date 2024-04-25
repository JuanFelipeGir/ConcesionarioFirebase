import React, { useEffect } from 'react'
import { View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Confirm = (route) => {
  console.log(route)
  const {Car,Name,Brand,Model,Year,Price}=route.params;
  useEffect(()=>{
    console.log('Car:',Car)
    console.log('Name:',Name)
    console.log('Brand:',Brand)
    console.log('Model:',Model)
    console.log('Year:',Year)
    console.log('Price:',Price)
  },[Car,Name,Brand,Model,Year,Price]);
  return (
    <PaperProvider>
        <View>
            <Text>Car: {Car}</Text>
            <Text>Name: {Name}</Text>
            <Text>Brand: {Brand}</Text>
            <Text>Model: {Model}</Text>
            <Text>Year: {Year}</Text>
            <Text>Price: {Price} </Text>
        </View>
    </PaperProvider>
  )
}

export default Confirm
