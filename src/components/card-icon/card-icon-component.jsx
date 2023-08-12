import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { togglewindow } from '../../redux/slices/card-slice';

import "./card-icon-style.scss";

const CardIcon = () => {
    const dispach = useDispatch();
    const carditems = useSelector(state => state.card.value.carditems)
    console.log("🚀 ~ file: card-icon-component.jsx:13 ~ CardIcon ~ carditems:", carditems)
    let numofitem = 0;

    carditems.forEach(element => {
        numofitem += element.quantity
    });
    return(
        <div onClick={()=>{dispach(togglewindow())}} className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{numofitem}</span>
        </div>
    )
}
export default CardIcon;