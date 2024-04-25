import React from 'react'
import Deals from './Deals'
const DealsAndOffersList = () => {
  return (
    <ScrollView>
        {Deals.map((deals)=>(
            <Vehicle
                key={deals.id}
                imageUrl={deals.imageUrl}
                description={deals.description}
            />
  ))}
    </ScrollView>
  )
}

export default DealsAndOffersList
