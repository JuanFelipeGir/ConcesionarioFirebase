import React from 'react'
import { View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Contact = () => {
  return (
    <PaperProvider>
      <View>
        <Text>Adress:</Text>
        <Text>Cr45 #80-50</Text>
        <Text>Cellphone:</Text>
        <Text>+57 1234567890</Text>
        <Text>Email</Text>
        <Text>ConsecionarioSouka@gmail.com</Text>
      </View>
    </PaperProvider>
  )
}

export default Contact
