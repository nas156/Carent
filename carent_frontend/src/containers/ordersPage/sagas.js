import {
    createOrderRoutine,
    deleteOrderRoutine,
    loadOrdersRoutine,
    loadUserNumbersAndCarNumbersRoutine
} from "./routines";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    createOrderRequest,
    deleteOrderRequest,
    getAllOrders,
    getCarsNumbersRequest,
    getUsersPassportsRequest
} from "./service";

function* loadOrders() {
    yield put(loadOrdersRoutine.request());
    const cars = yield call(() => getAllOrders());
    yield put(loadOrdersRoutine.success({cars: cars}));
}

function* watchLoadOrders() {
    yield takeEvery(loadOrdersRoutine.TRIGGER, loadOrders);
}

function* createOrder(action) {
    const newOrder = action.payload;
    yield put(createOrderRoutine.request());
    yield call(() => createOrderRequest(newOrder));
    yield put(createOrderRoutine.success());
    yield put(loadOrdersRoutine.trigger());
}

function* watchCreateOrder() {
    yield takeEvery(createOrderRoutine.TRIGGER, createOrder);
}

function* deleteOrder(action) {
    const id = action.payload;
    yield put(deleteOrderRoutine.request(id));
    yield call(() => deleteOrderRequest(id));
    yield put(deleteOrderRoutine.success());
    yield put(loadOrdersRoutine.trigger());
}

function* watchDeleteOrder() {
    yield takeEvery(deleteOrderRoutine.TRIGGER, deleteOrder);
}


function* getOptions() {
    yield put(loadUserNumbersAndCarNumbersRoutine.request());
    const numbers = yield call(() => getCarsNumbersRequest());
    const passports = yield call(() => getUsersPassportsRequest());
    yield put(loadUserNumbersAndCarNumbersRoutine.success({numbers, passports}));

}

function* watchGetOptions() {
    yield takeEvery(loadUserNumbersAndCarNumbersRoutine.TRIGGER, getOptions);
}

export default function* ordersSagas() {
    yield all([
        watchLoadOrders(),
        watchCreateOrder(),
        watchDeleteOrder(),
        watchGetOptions()
    ]);
}