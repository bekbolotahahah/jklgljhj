import React from 'react'


const NewsCard = ({ title, image,doit }) => {

    return (


        <>
            <div className="news">
                <div className='Nigga'>
                    <img src={image} alt=""  className='niggs'/>

                    <ul>
                        <h1>{title}</h1>
                        <p>{doit}</p>
                    </ul>

                </div>
          
            </div>
        </>
    )
}

export default NewsCard;    