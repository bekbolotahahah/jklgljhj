import React from 'react'
import { cups } from '../../helpers/fake-backend'
import Carusel from '../Carulsel'
import SlideCards from '../SlideCard'


const ScrollCheck = () => {
  return (<>


    <div className="headSlide">
      <Carusel>
        <div className='slide__window'>
          {
            cups.map(item => (
              <SlideCards
                key={item.id}
                brand={item.brand}
                image={item.image}
                modal={item.modal}
                price={item.price}
                description={item.description}

              />
            ))
          },
        </div>
      </Carusel>
    </div>
  </>
  )

}

export default ScrollCheck