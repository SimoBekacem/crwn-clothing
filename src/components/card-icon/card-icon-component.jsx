import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { togglewindow } from '../../redux/slices/card-slice';

import "./card-icon-style.scss";

const CardIcon = () => {
    const dispach = useDispatch();
    return(
        <div onClick={()=>{dispach(togglewindow())}} className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}
export default CardIcon;