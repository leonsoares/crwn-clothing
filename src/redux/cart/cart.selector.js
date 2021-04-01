// library for memoization
import { createSelector } from 'reselect'

// two kinds of selectors input-selector / output-selector

// input-Selector
    //gets the intire state and return just a cart state saving it to this const
const selectCart = state => state.cart;

// creating the memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulator, cartItem) => 
        accumulator + cartItem.quantity, 0)
)