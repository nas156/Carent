import {all} from 'redux-saga/effects';
import carSagas from '../containers/carsPage/sagas';
import userSagas from '../containers/userPage/sagas';
import orderSagas from '../containers/ordersPage/sagas';

export default function* rootSaga(){
    yield all([
        carSagas(),
        userSagas(),
        orderSagas()
    ])
}