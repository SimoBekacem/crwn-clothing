import React from 'react';
import { useSelector } from 'react-redux';

import './checkout-style.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout-component';

const Checkout = () => {
  const carditems = useSelector((state) => state.card.value.carditems);
  let total = 0;
  carditems.forEach((element) => {
    total += element.price * element.quantity;
  });
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {carditems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">TOTAL: {total} $</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/34 - CVV: 567
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};
export default Checkout;
