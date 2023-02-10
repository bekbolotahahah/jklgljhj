import React from "react";
import classes from "./styles.module.scss";

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className={classes.modal}>
            <ul className={classes.contentmodal}>
                <div className={classes.check}></div>
                <li className={classes.modalH1}><p>Спасибо
                    Ваш заказ принят
                    Ожидайте с Вами скоро свяжутся</p></li>
                <a href='/' >  <button className={classes.modalhome}>На главную </button> </a>
            </ul>

        </div>
    )
}
export default Modal