import { combineReducers } from 'redux'
import userReducer from './user/user-reducer'


// this is our combined reducer/ our root reducer
export default combineReducers({
    user: userReducer
})