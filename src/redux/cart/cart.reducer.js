import {CartActionTypes} from './cart.types';
// this is when our app first get initiated/ default value
const INITIAL_STATE = {
    hidden: true
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
       // we can use if else statements here as well
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;