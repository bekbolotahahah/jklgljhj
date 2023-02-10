import React from "react";
import logoImg from "../../styles/img/1.png"
import Twitter from "../../styles/img/Twitter.svg"
import inst from "../../styles/img/insta.svg"
import faseBook from "../../styles/img/facebook.svg"

const Footer = () => {
    return (
        <footer className='footer'>
            <li className='foot_line'></li>
            <ul className='footer_1'>

                <li className='foot_logo'>

                    <img src={logoImg} alt='first' />
                    <div className='foot_title'>
                        <li>CUstom caps</li>
                        <li className='auff'> Магазин кепок</li>
                    </div>

                </li>

                <li className='icon_foot'>
                    <div className='ploc'>
                        <img src={inst} alt="" />
                    </div>
                    <div className='ploc'>
                        <img src={faseBook} alt="" />

                    </div>
                    <div className='ploc'>
                        <img src={Twitter} alt="" />
                    </div>
                </li>
            </ul>
            <li className='media'>
                © Copyright 2019 - Lift Media
            </li>

        </footer>
    )
}

export default Footer