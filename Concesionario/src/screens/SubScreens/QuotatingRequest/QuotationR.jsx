import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'

const QuotationR = (navigation) => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [TypeVehicle, setTypeVehicle] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = () => {
    const appoinmentData = {
      Name, Phone, Email, TypeVehicle, Message
    }
    database()
      .ref('/quotate')
      .push(quotatingData)
      .then(() => {
        console.log('quotate Data uploaded succesful')
        navigation.navigate('Confirm', quotatingData)
      })
      .catch((error) => {
        console.error('Information not submited', error)
      })
  }

  return (
    <PaperProvider>
      <View>
        <Text>Name</Text>
        <TextInput
          value={Name}
          onChangeText={Name => setName(Name)} />
        <Text>Phone</Text>
        <TextInput
          value={Phone}
          onChangeText={Phone => setPhone(Phone)} />
        <Text>Email</Text>
        <TextInput
          value={Email}
          onChangeText={Email => setEmail(Email)} />
        <Text>TypeVehicle</Text>
        <TextInput
          value={TypeVehicle}
          onChangeText={TypeVehicle => setTypeVehicle(TypeVehicle)} />
        <Text>Message</Text>
        <TextInput
          value={Message}
          onChangeText={Message => setMessage(Message)} />

        <Button
          mode='contained'
          title='Submit' onPress={handleSubmit}>
          Send
        </Button>
      </View>
    </PaperProvider>
  )
}

export default QuotationR;
