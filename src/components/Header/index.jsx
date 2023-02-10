import React from 'react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { GrBasket } from 'react-icons/gr';
import { NavLink, useNavigate } from 'react-router-dom';
import { cups } from '../../helpers/fake-backend';
import { Link } from 'react-router-dom';


const Header = ({ value, setValue,countCartItems }) => {

const[menuActive,senMenuActive] = useState(false)

    const navigate = useNavigate()

    const FiltredCups = cups.filter(cup => {
        return cup.brand.toLowerCase().includes(value.toLowerCase())
    })

    const [isOpen, setIsOpen] = useState(true)

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    const itemClickHandler = (e) => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    return (

        <div className="Header">
            <nav className="homepage">

                <ul className="img1" />
                <ul className="frame">
                    <li><NavLink to='/home-page' className={({ isActive }) => isActive ? 'active' : ''}> Главная </NavLink></li>
                    <li><NavLink to='/catalog' className={({ isActive }) => isActive ? 'active' : ''}> Каталог </NavLink></li>
                    <li><NavLink to='/details' className={({ isActive }) => isActive ? 'active' : ''}> Бренд</NavLink></li>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}> O нас </NavLink></li>
                </ul>
             
                    <li className="inp"><input
                        type="text"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        className="inp1"
                        onClick={inputClickHandler}
                    />
                        <ul className="autoComplete">
                            {
                                value && isOpen
                                    ? FiltredCups.map((cups, index) => {
                                        return (<div className="border__autoComplete">
                                            <li className="autoComleteItem"
                                                onClick={itemClickHandler}>
                                                <Link

                                                    to={'/SearchPage'}
                                                >
                                                    {cups.brand}
                                                </Link></li></div>
                                        )
                                    })
                                    : null
                            }
                        </ul>
                        <li className="icon">
                            <NavLink to='/SearchPage'>
                                <CiSearch />
                            </NavLink>
                        </li>

                    </li>
                    <li className="iconn">
                        <div  onClick={() => navigate('/cart')}>
                        <NavLink to='/home-page' className={({ isActive }) => isActive ? 'active' : ''}> <GrBasket /></NavLink>     {''}
                            {countCartItems? (
                                <span className='badge'>{countCartItems}</span>
                            ) : (
                                ''

                            )}
                          
                        </div>
                    </li>
                    <ul className={menuActive?  "frameBurgrt active" : "frameBurgrt"}>
                    <li><NavLink to='/home-page' className={({ isActive }) => isActive ? 'active' : ''}> Главная </NavLink></li>
                    <li><NavLink to='/catalog' className={({ isActive }) => isActive ? 'active' : ''}> Каталог </NavLink></li>
                    <li><NavLink to='/details' className={({ isActive }) => isActive ? 'active' : ''}> Бренд</NavLink></li>
                    <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'active' : ''}> O нас </NavLink></li>
                </ul>

                    <div className='burger__mune' onClick={() => senMenuActive(!menuActive)} ></div>

            </nav><div className="l2" />

        </div>

    );
}



export default Header;



// class SearchResult{
//   constructor(value){
//     this.value = value
//   }
  
//   filterResult(){
//     return cups.filter(cup => {
//       return cup.name.toLowerCase().includes(this.value.toLowerCase())
//     })
//   }

//   stringifyResult(){
//     return JSON.stringify(this.filterResult())
//   }

//   setResultInLocalStorage(){
//     localStorage.setItem('searchResult', this.stringifyResult())
//   }
// }

// const [value , setValue] = useState('')
//   export let FiltredCups =new SearchResult(value)
// const Header = () => {

  