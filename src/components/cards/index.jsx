import React from 'react'
// import { Link } from 'react-router-dom';

const Cards = ( {setDeteylItems, brand, image, modal, price, id, description,count,size}) => {
 

  const onAddDetyl = () => {
    setDeteylItems(prev => [...prev, { id, brand, image, modal, price, count,size }])
}



  return (






    <div className='father_col'>

      {/* <Link to='/details/:id'> */}

        <div className="col" onClick={onAddDetyl}>
          <div className="firstImage"   >
            <img src={image} alt="cap" />
          </div>
          <div className='title_2'>
            <p className="pipi_1">{description}</p>
            <h4>{brand}</h4>
            <p className="pipi">  {modal}</p>
            <br></br>
            <p className="price">{price}</p>
          </div>
          
        </div>
      {/* </Link> */}
    </div>



  )
}

export default Cards;    