import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Text 
} from 'react-native';



const HomeScreen = ({navigation}) => {
    const navigateToHome = () => {
        navigation.navigate('Home'); 
    };

  return(
    <View style={styleHome.container}>
      <Text style={styleHome.title}> CONCESIONARIO MALUPE </Text>
      <Text style={styleHome.text}>Asequibilidad al alcance de su mano</Text>
      <Text style={styleHome.text}>Los mejores autos de la ciudad</Text>
      <View style={styleHome.logoContainer}>
        <Image source={require('../../../assets/logo.png')} style={styleHome.logo}/>
      </View>
      <TouchableOpacity style={styleHome.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styleHome.buttonText}> BIENVENIDO </Text>
      </TouchableOpacity>

    </View>
  )
}

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#192E50'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 265,
    height: 200,
    marginBottom:50,
    marginTop: 30
  },
  button: {
    backgroundColor: '#FF4928',
    width: '80%', 
    height: 50, 
    borderRadius: 25,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  title:{
    color: '#FF4928',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30
  },
  text:{
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30
  }
})

export default HomeScreen