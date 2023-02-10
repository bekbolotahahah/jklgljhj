import React from 'react'
import Big from "../../styles/img/big.png"
import { cups } from '../../helpers/fake-backend'
import Cards from '../cards'


const MainPart = () => {
  return (
    <div className='main_back'>
      <div className='main'>
        <div className='colum'>{
          cups.slice(0, 3).map(item => (
            <Cards
              key={item.id}
              brand={item.brand}
              image={item.image}
              modal={item.modal}
              price={item.price}
              description={item.description}
            />
          ))
        }
        </div>
        <div className='Big'>
          <img src={Big} alt="" />
        </div>
        <div className='title_3'>
          <h3>SUPREME & NEW ERA </h3>
          <p> COLLABARATION </p>
          <button className='button'> Открыть каталог</button>
        </div>
        <div className='radik'></div>
      </div>
    </div>
  )
}

export default MainPart;