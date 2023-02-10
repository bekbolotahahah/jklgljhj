import React from 'react'


const SlideCards = ({ brand, image, modal, price, id, description }) => {

    return (


        <>
            <div className="slide__card">
                <div className='slide__img'>
                    <img src={image} alt="" />
                </div>
                <div className="slide__title_card">
                    <h2>{brand}</h2>
                    <p>{modal}</p>
                    <h3>{price}</h3>
                </div>
            </div>
        </>
    )
}

export default SlideCards;    