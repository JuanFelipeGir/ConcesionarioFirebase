import React from "react";
import { StyleSheet, View, Button, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const Home = () => {
 
    return (
        <View style={styleHome.container}>
            <View>
                <Text style={styleHome.title}>BIENVENIDO A MALUPE</Text>
                <View style={styleHome.imageContainer}>
                    <Image source={require('../../../assets/silueta.png')} style={styleHome.image}/>
                </View>
                <Text style={styleHome.text}>Ruedas como nunca antes</Text>
                <ScrollView>
                    <View style={styleHome.buttonContainer}>
                        <TouchableOpacity style={styleHome.button}>
                        <Text style={styleHome.buttonText}> CATALOG </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleHome.button}>
                        <Text style={styleHome.buttonText}> VEHICLE LIST </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleHome.button}>
                        <Text style={styleHome.buttonText}> DRIVING TEST REQUEST </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleHome.button}>
                        <Text style={styleHome.buttonText}> SERVICE HISTORY </Text>
                    </TouchableOpacity>

                    </View>
                </ScrollView>
                
            </View>
        </View>
    )
}

const styleHome= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192E50'
    },
    title:{
        color: '#FF4928',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    image: {
        width: 400,
        height: 300,
        marginRight:65,
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
        fontSize: 16,
        fontStyle:'italic',
        textTransform: 'uppercase',
        marginVertical: 80,
        marginHorizontal:120
    },
    button: {
        backgroundColor: '#A8BAE6',
        width: '80%', 
        height: 50, 
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 100, 
        marginLeft: 45
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1
    }, 
})

export default Home