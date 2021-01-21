import {combineReducers} from 'redux';
import cars from '../containers/carsPage/reducer';
import clients from '../containers/clientsPage/reducer';
import orders from '../containers/ordersPage/reducer';
import auth from '../containers/Auth/reducer';

const rootReducer = combineReducers({ cars, clients, orders, auth });

export default rootReducer;