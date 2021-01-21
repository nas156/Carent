import {combineReducers} from 'redux';
import cars from '../containers/carsPage/reducer';
import users from '../containers/userPage/reducer';
import orders from '../containers/ordersPage/reducer';
import auth from '../containers/Auth/reducer';

const rootReducer = combineReducers({ cars, users, orders, auth });

export default rootReducer;