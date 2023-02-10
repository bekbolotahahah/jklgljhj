import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";
import Modal from './Modal/modal'
import Footer from '../Footer';


const CartPart = ({ cartItems,count,}) => {

  const [monitoring, setMonitoring] = useState({ count })
  const [show, setShow] = useState(false)



  const hendleDecrement = (object) => {
    if (object.count > 1) {
      object.count--
      setMonitoring(Date.now())
      console.log(object.count + ' l;skf;laskdfja;kl');
    }
  }



  const handleIncremeny = (object) => {
    if (object.count < 10) {
      object.count++
      setMonitoring(Date.now())
      console.log(object.count + ' l;skf;laskdfja;kl');
    }

  }


  return (
    <div className={classes.onteyner__1}>

      <nav className={classes.ToHome}>
        <li ><Link to="/" > Главная  </Link></li>
        <li className={classes.iconn}><a href>{">"}</a></li>
        <li className={classes.cat}>Kорзина</li>
      </nav>

      <div className={classes.block}>
        {
          cartItems.length === 0 && <div className={classes.cart__emty} >
            <div className={classes.cart__emty__to}>
              <h1>Ваша корзинка пуста </h1>
              <h2>перейдите в католог что-бы заполнить корзинку</h2>

            </div>
            <div > <ul className={classes.img1} /> <Link to='/catalog'><button className={classes.cart44}>перейти в Каталог</button></Link></div>
          </div>
        }
      </div>

      <div className={classes.cart__content}>
        {cartItems.map((item) => (
          <div key={item.id} className={classes.cart__block}>

            <div className={classes.cart__img}>
              <img src={item.image} alt="" />
            </div>

            <div className={classes.inc__dec}>
              <div><button className={classes.add} onClick={() => handleIncremeny(item)} >+</button></div>
              <div><span>{item.count}</span></div>
              <div><button className={classes.remuve} onClick={() => hendleDecrement(item)}>-</button></div>
            </div>
            <div className="size__cart">
              <p className='p'> {item.size}</p>
             
            </div>

            <div className={classes.inc__Brand}>
              <div><h1>{item.brand}</h1></div>
              <div><h2>{item.modal}</h2></div>
            </div>


            <div className={classes.prise}><h1> {item.price.toFixed(2) * item.count} сом</h1>

            </div>

          </div>
        ))

        }
      </div>


      <ul className={classes.cart}>



        <div className={classes.inputs__cart}>
          <li className={classes.cart1}>Ваша информация</li>
          <div> <input className={classes.cart2} placeholder='Имя' onChange={(event) => console.log(event.target.value)}></input></div>
          <div> <input className={classes.cart3} placeholder='Фамилия' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>   <input className={classes.cart2} placeholder='+996...' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>   <input className={classes.cart3} placeholder='Email' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>
            <input className={classes.cart2} placeholder='Адресс' onChange={(event) => console.log(event.target.value)}></input></div>





        </div>
        <div > <button className={classes.cart4} onClick={() => setShow(true)}>купить</button></div>

      </ul>
      <Modal show={show} />
      <Footer />
    </div>
  )
}

export default CartPart;    