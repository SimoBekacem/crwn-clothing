import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51NeuJzBZt0VLNFbxlEAEueYLsKWxm0z4g0SSPUf3twUQ9D66wZtxAnEcOMsR6KiJJHQ5xeXabG6a68pIukCyL592004yx2T4DN';
    const onToken = ( token => {
        console.log(token)
        alert('Payment successful')
    })
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;