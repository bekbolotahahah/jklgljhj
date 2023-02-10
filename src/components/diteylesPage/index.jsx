import React from 'react'
import Slider from '../Slider'
import { Link } from 'react-router-dom'




const DeteilPA = ({ brand, image, modal, price, id, description, setCartItems ,cartItems}) => {

  return (
<>
<div className='top__pogination'>
        <div>
          <ul className='one__top_poginstion'>
            <li> <Link to='/home-page'>Главная</Link> </li>
            <li>{'>'}</li>
            <li> <Link to='/catalog'>Каталог</Link> </li>
            <li>{'>'}</li>
            <li className='ylow__top__pogination'>Детали</li>
          </ul>
        </div>
        <div></div>
      </div>
    <div>
      {cartItems.slice(0, 1).map((item) => (
     <div className="deteil">
<div className="top__detail">
    <div className="big__detayl"><img src={item.image} alt="" /></div>
    <div className="bottom__diteyl">
        <div className="mini__datail1"></div>
        <div className="mini__datail2"></div>
        <div className="mini__datail3"></div>
    </div>
</div>
<div className="left__detyl">
    <div className="topPart__detayl">
        <div></div>
        <div className="top__part__text5"><h1>{item.brand}</h1> <h2>{item.modal}</h2></div>

    </div>

    <div className="deteyl__size">

        <div className="size__brend"><h1>S</h1></div>
        <div className="size__brend"><h1>M</h1></div>
        <div className="size__brend"><h1>L</h1></div>
        <div className="size__brend"><h1>XL</h1></div>
    </div>

    <div className="inc__dec__de">

        <div><span>+</span></div>
        <div><span>1</span></div>
        <div><span>-</span></div>


    </div>
    <div className="prise__looo">
        <div></div>
        <div>
            <div className="deteyl__prise__4"><h1>{item.price}</h1></div>
            <div className="buutton__prise" ></div>
        </div>
    </div>
</div>



</div>
        ))

        }
    {/* {
      cups.slice(0,1).map(item => (
        <Deteil
        key={item.id}
        brand={item.brand}
        image={item.image}
        modal={item.modal}
        price={item.price}
        description={item.description}

        />
      ))
    } */}
    <Slider/>
  
    </div></>
  )
}

export default DeteilPA;    