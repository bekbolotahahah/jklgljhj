import React from 'react';

import CartPart from '../components/CartPart/index';


const CartPage = (props) => {

const{cartItems, onAdd,setCartItems} = props


  return (
    <div>
      
    <CartPart onAdd={onAdd} cartItems={cartItems} SetCartItems={setCartItems}/>
   
    </div>
  )
}

export default CartPage;  