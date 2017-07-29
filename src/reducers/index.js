import people from './people-reducer.js';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  people,
  routing: routerReducer
});

export default rootReducer;
