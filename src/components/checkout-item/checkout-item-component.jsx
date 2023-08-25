import React from 'react';
import { useDispatch } from 'react-redux';

import './checkout-item-style.scss';

import {
  removeitem,
  addtocard,
  subtocard,
} from '../../redux/slices/card-slice';

const CheckoutItem = ({ item }) => {
  const dispash = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispash(subtocard(item))}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => dispash(addtocard(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price * item.quantity} $</span>
      <div
        className="remove-button"
        onClick={() => {
          dispash(removeitem(item));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
