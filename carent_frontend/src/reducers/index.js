import {combineReducers} from 'redux';
import cars from '../containers/carsPage/reducer';
import users from '../containers/userPage/reducer';

const rootReducer = combineReducers({ cars, users });

export default rootReducer;