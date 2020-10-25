import {combineReducers} from 'redux';
import ActivityReducer from './ActivityReducer';

const rootReducer = combineReducers({
  //combine reducers take objects as key:value pairs
  activities: ActivityReducer,
})

export default rootReducer;