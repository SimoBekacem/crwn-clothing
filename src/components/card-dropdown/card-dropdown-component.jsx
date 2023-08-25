import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './card-dropdown-style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../card-item/card-item-component';

import { togglewindow } from '../../redux/slices/card-slice';

const CartDropdown = ({ history }) => {
  const carditems = useSelector((state) => state.card.value.carditems);
  const dispash = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {carditems.length ? (
          carditems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('crwn-clothing/checkout');
          dispash(togglewindow());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
export default CartDropdown;
