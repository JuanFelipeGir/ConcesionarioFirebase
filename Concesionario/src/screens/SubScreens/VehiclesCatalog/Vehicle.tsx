import React from 'react'
import {
    StyleSheet, 
    View, 
    Image, 
    Text
} from 'react-native'

const Vehicle = ({ imageUrl, description, price }) => { 
    return (
        <View style={styles.container}>
            
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: imageUrl }} 
                    style={styles.img}
                />
                <Text style={styles.text}>{description}</Text>
                <Text style={styles.text}>$ {price}</Text>  
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192E50'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    img: {
        width: 300,
        height: 300,
        marginTop: 25, 
        marginLeft: 70
    },
    cardContainer: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#A8BAE6',
        width: 430,
        height: 450,
        marginBottom: 25,
        marginLeft: 18,
        marginTop: 15
    },

})

export default Vehicle
