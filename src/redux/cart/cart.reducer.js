import {CartActionTypes} from './cart.types';
import { addItemToCart } from './cart.utils.js'
// this is when our app first get initiated/ default value
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
       // we can use if else statements here as well
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        };
        case CartActionTypes.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;