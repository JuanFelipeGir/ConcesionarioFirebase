import React from 'react'
import DealsAndOffersList from '../DealsAndOffers/DealsAndOffersList';

const Library = () => {
    const Deals = [
      {
          id:1,
          imageUrl:'https://img.lovepik.com/element/45007/2707.png_860.png',
          description:'Un carro rrarro',
      },
      {
          id:2,
          imageUrl:'https://img.lovepik.com/element/45007/2707.png_860.png',
          description:'Un carro rrarro',    
      },
      {
          id:3,
          imageUrl:'https://img.lovepik.com/element/45007/2707.png_860.png',
          description:'Un carro rrarro',
      }
];
  return <DealsAndOffersList Deals={Deals}/>;
};

export default Library
