import React from 'react';
import { useSelector } from 'react-redux';

import './checkout-style.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item-component';

const Checkout = () => {
    const carditems = useSelector(state => state.card.value.carditems);
    console.log("🚀 ~ file: checkout-component.jsx:10 ~ Checkout ~ carditems:", carditems)
    let total = 0;
    carditems.forEach(element => {
        total += element.price * element.quantity;
    });
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                carditems.map(item => {
                    return <CheckoutItem key={item.id} item={item} />
                })
            }
            <div className='total'>TOTAL: {total} $</div>
        </div>
    )
}
export default Checkout;