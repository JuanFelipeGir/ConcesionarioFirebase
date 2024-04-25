import React from 'react'
import { View,Image } from 'react-native'
import { PaperProvider } from 'react-native-paper'


const Deals = ({imageUrl,description}) => {
  return (
    <PaperProvider>
        <View>
            <Image
            source={{uri:imageUrl,}}/>
            <Text>
                {description}
            </Text>
        </View>
    </PaperProvider>
  )
}

export default Deals
