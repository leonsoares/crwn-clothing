import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
// import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount}</span>
    </div>
)


// writing this function with a selecto a selector
// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount
// })

//with out the selector
const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulator, cartItem) => 
    accumulator + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)