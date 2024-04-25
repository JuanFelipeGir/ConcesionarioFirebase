import React from 'react'
import ServiceList from './ServiceList'

const CatalogSV = () => {
  const Services = [
    {
        id:1,
        description:'Servicio Aleatorio',
        price:25000
    },
    {
        id:2,
        description:'Servicio Aleatorio',
        price:25000   
    },
    {
        id:3,
        description:'Servicio Aleatorio',
        price:25000   
    }
];
  return <ServiceList Services={Services}/>;
};

export default CatalogSV