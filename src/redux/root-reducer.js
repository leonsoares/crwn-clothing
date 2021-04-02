import { combineReducers } from 'redux'

import {persistReducer} from 'redux-persist'
// importing the type os store we want ( localStorage or sessionStorage)
// sessionStorage would be a different path/
import storage from 'redux-persist/lib/storage'


import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'


// redux persist config
const persistConfig = {
    key: 'root',
    storage,

    // pass here the reducers name that we want to store
    whitelist: ['cart'] // we are not passing 'user' because it is been handled by firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

// this is our combined reducer/ our root reducer
export default persistReducer(persistConfig, rootReducer)

/* THIS IS WHAT WE EXPORTED BEFORE PERSISTREDUCER
this is our combined reducer/ our root reducer

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

*/