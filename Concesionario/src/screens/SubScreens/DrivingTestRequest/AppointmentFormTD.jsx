import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AppointmentFormTD = () => {
  const [Car, setCar]=useState('');
  const [Date, setDate]=useState('');
  const [Name, setName]=useState('');
  const [Surname, setSurname]=useState('');
  const [DNI, setDNI]=useState('');
  const [Cellphone, setCellphone]=useState('');
  const navigation=useNavigation();

  const handleSubmit=()=>{
    console.log('Car',Car);
    console.log('Date',Date);
    console.log('Name',Name);
    console.log('Surname',Surname);
    console.log('DNI',DNI);
    console.log('Cellphone',Cellphone);

    navigation.navigate('Confirm', {Car:Car,Date:Date,Name:Name,Surname:Surname,DNI:DNI,Cellphone:Cellphone})
  }

  return (
    <PaperProvider>
        <View>
            <Text>Car</Text>
            <TextInput 
            value={Car}
            onChangeText={Car =>setCar(Car)}/>
            <Text>Date</Text>
            <TextInput 
            value={Date}
            onChangeText={Date =>setDate(Date)}/>
            <Text>Name</Text>
            <TextInput 
            value={Name}
            onChangeText={Name =>setName(Name)}/>
            <Text>Surname</Text>
            <TextInput 
            value={Surname}
            onChangeText={Surname =>setSurname(Surname)}/>
            <Text>DNI</Text>
            <TextInput 
            value={DNI}
            onChangeText={DNI =>setDNI(DNI)}/>
            <Text>Cellphone</Text>
            <TextInput 
            value={Cellphone}
            onChangeText={Cellphone =>setCellphone(Cellphone)}/>

            <Button
              mode='contained'
              title='Submit' onPress={handleSubmit}>
                Send
            </Button>
        </View>
    </PaperProvider>
  )
}

export default AppointmentFormTD
