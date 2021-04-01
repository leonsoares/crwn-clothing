import {UserActionTypes} from './user.types';
// this is when our app first get initiated/ default value
const INITIAL_STATE = {
    currentUser: null
  };
  
const userReducer = (state = INITIAL_STATE, action) => {
    // we can use if else statements here as well
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        };
        default:
        return state;
    }
};
  
  export default userReducer;

