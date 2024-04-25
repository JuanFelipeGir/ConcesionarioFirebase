import React from 'react'
import { ScrollView} from 'react-native'
import Service from './Service'

const ServiceList = ({Services}) => {
  return (
    <ScrollView>
        {Services.map((Service)=>(
            <Service
                key={Service.id}
                description={Service.description}
                price={Service.price}
            />
  ))}
    </ScrollView>
  )
}

export default ServiceList