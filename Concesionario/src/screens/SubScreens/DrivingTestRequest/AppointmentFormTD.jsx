import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const AppointmentFormTD = () => {
  const [car, setCar] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dni, setDNI] = useState('');
  const [cellphone, setCellphone] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("1");
    const appointmentData = {
      car,
      date,
      name,
      surname,
      dni,
      cellphone
    };
    console.log("2");
    try {
      const databaseRef = database().ref('/appointment');
      console.log("3");
      databaseRef.push(appointmentData)
        .then(() => {
          console.log('Appointment data uploaded successfully');
          navigation.navigate('Confirm', appointmentData);
        })
        .catch(error => {
          console.error('Error submitting appointment data:', error);
        });
    } catch (error) {
      console.error('Error accessing database:', error);
    }
  };
  

  return (
    <View>
      <Text>Car</Text>
      <TextInput value={car} onChangeText={setCar} />
      <Text>Date</Text>
      <TextInput value={date} onChangeText={setDate} />
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Surname</Text>
      <TextInput value={surname} onChangeText={setSurname} />
      <Text>DNI</Text>
      <TextInput value={dni} onChangeText={setDNI} />
      <Text>Cellphone</Text>
      <TextInput value={cellphone} onChangeText={setCellphone} />

      <Button mode='contained' onPress={handleSubmit}>
        Send
      </Button>
    </View>
  );
};

export default AppointmentFormTD;
