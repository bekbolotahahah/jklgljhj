import React from "react";
import { Link } from "react-router-dom";
import bla from "../../styles/img/yandex-money-logo@logotyp.us 1.svg"
import blabla from "../../styles/img/mastercard-2 1.svg"
import blablabla from "../../styles/img/visa 1.svg"


const FooterNav = () => {
    return (
        <div className="foot__nav">
            <div className="top__nav__foot">
                <div className="top__nav_bar">
                    <ul className="prodaction__footer">
                        <h1>Продукция</h1>
                        <li><Link href='#'>Кепки</Link></li>
                        <li><Link href='#'>Шапки</Link></li>
                        <li><Link href='#'>Панамки</Link></li>
                        <li><Link href='#'>Кастомизация</Link></li>
                        <li><Link href='#'>Другая продукция</Link></li>
                        <li><Link href='#'>Эксклюзив</Link></li>
                    </ul>
                    <ul className="prodaction__footer__compamny">
                        <h1>О компании</h1>
                        <li><Link href='#'>О нас</Link></li>
                        <li><Link href='#'>Контакты</Link></li>
                    </ul>
                </div>
                <div className="paymaent__news">
                    <div className="center__payment">
                        <h1>Подписаться на новинки</h1>
                        <div className="inp__pay">
                            <input type="text" placeholder="Email address" />
                            <div className="next__iAm__tired"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pay__tools">
                <div></div>
                <div className="pay__tools__bank">
                    <div className="pay__icons"><img src={bla} alt="" /></div>
                    <div className="pay__icons"><img src={blabla} alt="" /></div>
                    <div className="pay__icons"><img src={blablabla} alt="" /></div>
                </div>
                <div> <h1> +996 755 999820</h1></div>
            </div>
        </div>
    )
}

export default FooterNav