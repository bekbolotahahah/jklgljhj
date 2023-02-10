import React, { useState } from 'react'
import { GrBasket } from 'react-icons/gr'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CatalogCard = ({ brand, image, modal, price, id, description,size, setCartItems, count, cartItems }) => {

    const [isActive, setIsActive] = useState(!!cartItems?.find(cap => cap.id === id))


    const handleClick = event => {
        setIsActive(current => !current);
    };
    const onAdd = () => {
        setCartItems(prev => [...prev, { id, brand, image, modal, price, count,size }])
    }


    return (
        <div className='Catalog__Card'>
            <li className='count__card'>{count}</li>
            <div className='image_contaner'>
                <Link to='/details/:id'>
                    <img src={image} alt='cup' onClick={onAdd} />
                </Link>
            </div>

            <div className='bottom__card'>

                <ul>
                    <li> <h1>{brand}</h1></li>
                    <li>{price}</li>
                </ul>
                <li className='nike__vnf'>{modal} </li>
                <div className='card__in_cart'>
                    <p className='cart__in__cart'>
                        item added to cart
                    </p>

                    <div className='svg'><FiCheck /></div>
                </div>
                <button className={isActive ? 'addToCart__active' : 'addToCart'} onClick={onAdd} >
                    <p><a onClick={handleClick}> add_to_cart</a></p>
                    <div className='bascet__icpns'><GrBasket /></div>
                </button>
            </div>


        </div>
    )




}

export default CatalogCard;    