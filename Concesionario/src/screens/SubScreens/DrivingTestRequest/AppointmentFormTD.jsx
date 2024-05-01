import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper';
import firebase from '../../../../database/firebase'


const AppointmentFormTD = () => {
  const [state, setState] = useState({
    car: '',
    date: '',
    name: '',
    surname: '',
    dni: '',
    cellphone: '',
  });

  const handleChangeText = (name, value) => {
    setState({
     ...state,
      [name]: value,
    });
  }

  const AddAppointment = () => {
    if(state.name === '') {
      Alert('Please provide an information')
    } else {
      firebase.db.collection('appointments').add({
        car: state.car,
        date: state.date,
        name: state.name,
        surname: state.surname,
        dni: state.dni,
        cellphone: state.cellphone,
      })
      Alert.alert('Added Appointment')
      
      //console.log(state)
    }
  }


  return (
    <PaperProvider>
      <View>
        <Text>Car</Text>
        <TextInput 
          placeholder='Car' 
          onChangeText={(value) => handleChangeText('car', value)} 
        />
        <Text>Date</Text>
        <TextInput 
          placeholder='Date' 
          onChangeText={(value) => handleChangeText('date', value)} 
        />
        <Text>Name</Text>
        <TextInput
         placeholder='Name' 
         onChangeText={(value) => handleChangeText('name', value)} 
        />
        <Text>Surname</Text>
        <TextInput 
         placeholder='Surname' 
         onChangeText={(value) => handleChangeText('surname', value)} 
        />
        <Text>DNI</Text>
        <TextInput 
         placeholder='DNI' 
         onChangeText={(value) => handleChangeText('dni', value)}  
        />
        <Text>Cellphone</Text>
        <TextInput
         placeholder='Cellphone' 
         onChangeText={(value) => handleChangeText('cellphone', value)} 
        />

        <Button mode='contained' title='Submit' onPress={() => AddAppointment()}>
          Send
        </Button>
      </View>
    </PaperProvider>
  );
};

export default AppointmentFormTD;
