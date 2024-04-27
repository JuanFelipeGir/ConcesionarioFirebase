import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Database } from 'firebase/database'

const AppointmentFormTD = () => {
  const [Car, setCar]=useState('');
  const [Date, setDate]=useState('');
  const [Name, setName]=useState('');
  const [Surname, setSurname]=useState('');
  const [DNI, setDNI]=useState('');
  const [Cellphone, setCellphone]=useState('');
  const navigation=useNavigation();

  const handleSubmit=()=>{
    const appoinmentData ={
      Car,Date,Name,Surname,DNI,Cellphone
    }
    database()
    .ref('/appoinment')
    .push(appoinmentData)
    .then(()=>{
      console.log('appoinment Data uploaded succesful')
      navigation.navigate('Confirm', appoinmentData)
    })
    .catch((error)=>{
      console.error('Information not submited',error)
    })
  }

  return (
    <PaperProvider>
        <View>
            <Text>Car</Text>
            <TextInput 
            value={Car}
            onChangeText={setCar}/>
            <Text>Date</Text>
            <TextInput 
            value={Date}
            onChangeText={setDate}/>
            <Text>Name</Text>
            <TextInput 
            value={Name}
            onChangeText={setName}/>
            <Text>Surname</Text>
            <TextInput 
            value={Surname}
            onChangeText={setSurname}/>
            <Text>DNI</Text>
            <TextInput 
            value={DNI}
            onChangeText={setDNI}/>
            <Text>Cellphone</Text>
            <TextInput 
            value={Cellphone}
            onChangeText={setCellphone}/>

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
