import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import total from './totalReducer';

export default combineReducers({
  cart: cartReducer,
});
