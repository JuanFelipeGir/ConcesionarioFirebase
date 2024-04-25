import React, { useEffect } from 'react'
import { View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Confirm = ({route}) => {
  console.log(route)
  const {Name,Phone,Email,TypeVehicle,Message}=route.params;
  useEffect(()=>{
    console.log('Name:',Name)
    console.log('Phone:',Phone)
    console.log('Email:',Email)
    console.log('TypeVehicle:',TypeVehicle)
    console.log('Message:',Message)
  },[Name,Phone,Email,TypeVehicle,Message]);
  return (
    <PaperProvider>
        <View>
            <Text>Name: {Name}</Text>
            <Text>Phone: {Phone}</Text>
            <Text>Email: {Email}</Text>
            <Text>TypeVehicle: {TypeVehicle}</Text>
            <Text>Message: {Message} </Text>
        </View>
    </PaperProvider>
  )
}

export default Confirm;
