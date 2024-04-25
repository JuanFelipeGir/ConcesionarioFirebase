import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'

const WorkService = (navigation) => {
  const [Car, setCar]=useState('');
  const [Name, setName]=useState('');
  const [Brand, setBrand]=useState('');
  const [Model, setModel]=useState('');
  const [Year, setYear]=useState(int);
  const [Price, setPrice]=useState(int);

  const handleSubmit=()=>{
    console.log('Car',Car);
    console.log('Name',Name);
    console.log('Brand',Brand);
    console.log('Model',Model);
    console.log('Year',Year);
    console.log('Price',Price);

    navigation.navigate('Confirm', {Car:Car,Name:Name,Brand:Brand,Model:Model,Year:Year,Price:Price})
  }

  return (
    <PaperProvider>
        <View>
            <Text>Car</Text>
            <TextInput 
            value={Car}
            onChangeText={Car =>setCar(Car)}/>
            <Text>Name</Text>
            <TextInput 
            value={Name}
            onChangeText={Name =>setName(Name)}/>
            <Text>Brand</Text>
            <TextInput 
            value={Brand}
            onChangeText={Brand =>setBrand(Brand)}/>
            <Text>Model</Text>
            <TextInput 
            value={Model}
            onChangeText={Model =>setModel(Model)}/>
            <Text>Year</Text>
            <TextInput 
            value={Year}
            onChangeText={Year =>setYear(Year)}/>
            <Text>Price</Text>
            <TextInput 
            value={Price}
            onChangeText={Price =>setPrice(Price)}/>

            <Button
              mode='contained'
              title='Submit' onPress={handleSubmit}>
                Send
            </Button>
        </View>
    </PaperProvider>
  )
}

export default WorkService
