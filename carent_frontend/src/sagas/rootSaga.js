import {all} from 'redux-saga/effects';
import carsSagas from '../containers/carsPage/sagas';
import clientsSagas from '../containers/clientsPage/sagas';
import ordersSagas from '../containers/ordersPage/sagas';
import authSagas from "../containers/Auth/sagas";

export default function* rootSaga(){
    yield all([
        carsSagas(),
        clientsSagas(),
        ordersSagas(),
        authSagas()
    ])
}