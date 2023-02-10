import React from "react";
import first from "../../styles/img/first.png";
import second from "../../styles/img/second.png";
import third from "../../styles/img/third.png"
import { Link } from "react-router-dom";

const TopPart = () => {
    return (
       <header className='part_1_1'>
      <div className='Part_1'>
        <div className='grup_nev'>

          <h1 className="title">NEW ERA</h1>
          <p className="title_after">Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный принт 70х,тематические группы и отличное качество</p>
          <Link to='/catalog'><button className='open_catalog'>  Открыть каталог </button></Link>

        </div>
        
          <img src={first} alt='first' className="picone"/>
      
       
          <img src={second} alt='second' className='pictwo'/>
     
        
          <img src={third} alt='third' className="pithird"/>
       

        <div className="red">
          <div className="smallred"></div>
        </div>
        <div className="yellow"></div>

      </div>
    </header>
    )
}



export default TopPart;
