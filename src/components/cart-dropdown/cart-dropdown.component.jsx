import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

//withRouter gave us access to history
    // connect already passes dispatch to props if we do not provide a second parameter

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>  
                )) 
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

// connect already passes dispatch to props if we do not provide a second parameter
export default withRouter(connect(mapStateToProps)(CartDropDown))