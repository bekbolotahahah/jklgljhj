import React, { useContext } from "react";
import classes from "./styles.module.scss";
import CupsContext from "../../../context/CupsContext";

import { Link } from 'react-router-dom';
export const filterItems = [
    { title: 'Сначала дешёвые', value: 'price', isReverse: false },
    { title: 'Сначала дорогие', value: 'price', isReverse: true },
    { title: 'Новинки', value: 'new' },
]
const Modall = props => {


    
    const actions = useContext(CupsContext)

    if (!props.show) {
        return null
    }



    return (
<div className={classes.modal_animation}>

        <div className={classes.modal}>
            <ul className={classes.contentmodal}>
                <Link className={classes.escape}>  <li className={classes.modalhome} onClick={() => props.setFilterType('popular')}>Популярные </li> <Link > <li className={classes.modalhomeee} ></li> </Link></Link>
                {filterItems.map((item, idx) => <Link key={idx} onClick={e => actions.setFilter({ value: item.value, isReverse: item.isReverse })} >  <li className={classes.modalhome}>{item.title}</li> </Link>)}
                <Link onClick={e => actions.setFilter(null)}>  <li className={classes.modalhome}>Все</li> </Link>

            </ul>

        </div></div>
    )
}
export default Modall