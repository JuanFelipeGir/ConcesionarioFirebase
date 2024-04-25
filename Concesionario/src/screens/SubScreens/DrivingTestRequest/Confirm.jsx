import React, { useEffect } from 'react'
import { View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Confirm = ({route}) => {
  console.log(route)
  const {Car,Date,Name,Surname,DNI,Cellphone}=route.params;
  
  useEffect(()=>{
    console.log('Car:',Car)
    console.log('Date:',Date)
    console.log('Name:',Name)
    console.log('Surname:',Surname)
    console.log('DNI:',DNI)
    console.log('Cellphone:',Cellphone)
  },[Car,Date,Name,Surname,DNI,Cellphone]);
  return (
    <PaperProvider>
        <View>
            <Text>Car: {Car}</Text>
            <Text>Date: {Date}</Text>
            <Text>Name: {Name}</Text>
            <Text>Surname: {Surname}</Text>
            <Text>DNI: {DNI}</Text>
            <Text>Cellphone: {Cellphone} </Text>
        </View>
    </PaperProvider>
  )
}

export default Confirm
