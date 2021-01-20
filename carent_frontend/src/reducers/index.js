import {combineReducers} from 'redux';
import cars from '../containers/carsPage/reducer';
import users from '../containers/userPage/reducer';
import orders from '../containers/ordersPage/reducer';

const rootReducer = combineReducers({ cars, users, orders });

export default rootReducer;