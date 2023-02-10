import React from 'react'
import DeteilPA from '../components/diteylesPage';
import Footer from '../components/Footer/index';

const DetailsPage = ({onAdd, cartItems}) => {
  return (
  <div>
    <DeteilPA 
    
    onAdd={onAdd} cartItems={cartItems}/>
    <Footer/>
 
  </div>
  )
}

export default DetailsPage;