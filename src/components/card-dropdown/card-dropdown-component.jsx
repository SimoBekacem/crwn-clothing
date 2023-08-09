import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import './card-dropdown-style.scss';

import CustomButton from  '../custom-button/custom-button.component';
import CartItem from '../card-item/card-item-component';

const CartDropdown = () => {
    const carditems = useSelector(state => state.card.value.carditems)
    console.log("🚀 ~ file: card-dropdown-component.jsx:11 ~ CartDropdown ~ carditems:", carditems)
    
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {carditems.length ? (
                    carditems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
};
export default CartDropdown;