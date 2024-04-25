import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const Service = ({description,price}) => {
  return (
<View style={Style.container}>
    <Text style={Style.title}>
        {description}
    </Text>
    <Text style={Style.price}>
        ${price}
    </Text>
</View>
  )
}

const Style =StyleSheet.create({
    title:{
        fontSize:25,
        color:'white',
        textAlign:'center'
    },
    container:{
        justifyContent:"flex-start",
        backgroundColor:'ligth blue'
    },
    price:{
        fontSize:35
    }

})
export default Service