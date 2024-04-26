import React from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    const handleNavigate = (screeName) => {
        navigation.navigate(screeName)
    }
 
    return (
        <View style={styleHome.container}>
            <ScrollView>
                <View>
                    <Text style={styleHome.title}>BIENVENIDO A MALUPE</Text>
                    <View style={styleHome.imageContainer}>
                        <Image source={require('../../../assets/silueta.png')} style={styleHome.image}/>
                    </View>
                    <Text style={styleHome.text}>Ruedas como nunca antes</Text>
                    
                    <View style={styleHome.buttonContainer}>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('Catalog')}>
                            <Text style={styleHome.buttonText}> CATALOG </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('DrivingTestRequest')}>
                            <Text style={styleHome.buttonText}> DRIVING TEST REQUEST </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('DealsAndOffers')}>
                            <Text style={styleHome.buttonText}> Deals And Offers  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button}onPress={() => handleNavigate('ServiceHistory')}>
                            <Text style={styleHome.buttonText}> SERVICE HISTORY </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('VehiclesCatalog')}>
                            <Text style={styleHome.buttonText}> Vehicles Catalog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button}onPress={() => handleNavigate('VehiclesSearch')}>
                            <Text style={styleHome.buttonText}> Vehicles Search </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('WorkShopService')}>
                            <Text style={styleHome.buttonText}> Work Shop Service </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleHome.button} onPress={() => handleNavigate('Contact')}>
                            <Text style={styleHome.buttonText}> Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        marginBottom: 30, 
        marginLeft: 45
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flex: 1
    }, 
})

export default Home