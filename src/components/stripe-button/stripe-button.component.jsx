import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishibleKey = 'pk_test_51IcDXxLzm6GbUrwa7oKx4VgONUIGNt0BwRYfRakv53nESZxCroNvRfZr72qRcU5tDPyFwqxsqSLpYq7R71YziTAt00CbUFNvKm'
    
    const onToken = token => {
        console.log(token)
        alert('payment Successfull')
    }
    return (
        
        <StripeCheckout
        //  stripe provides alot more properties that we can pass here
            label='Pay Now'
            name='CRWN Clothing ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}` }
            amount={priceForStripe}
            panelLabel='Pay Now'
            //token is the on sucess method that triggers when we submit
            token={onToken}
            stripeKey={publishibleKey}
        />
    )
}

export default StripeCheckoutButton