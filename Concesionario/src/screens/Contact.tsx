import React from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const Contact = () => {
  return (
    <PaperProvider>
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={require('../../assets/blue.png')}  style={style.image}/>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.text}>Address:  Cr45 #80-50</Text>
          <Text style={style.text}>Cellphone:   +57 1234567890</Text>
          <Text style={style.text} >Email: ConcesionarioSouka@gmail.com</Text>
        </View>
      </View>
    </PaperProvider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192E50'
  },
  image: {
    width: 495,
    height: 300,
    alignItems: 'center',
    marginTop: 20
  },
  imageContainer: {
    backgroundColor: '#192E50',
    width: 500,
    height: 200,
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 0,
    marginTop: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'justify',
    marginTop: 5,
    marginLeft: 15
  },
  infoContainer: {
    marginTop: 150
  }
})

export default Contact
