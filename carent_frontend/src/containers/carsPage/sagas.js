import {addCarRoutine, deleteCarRoutine, editCarRoutine, loadCarsRoutine} from "./routines";
import {all, put, call, takeEvery} from 'redux-saga/effects';
import {addCarRequest, deleteCarRequest, editCarRequest, getAllCars} from "./service";

function* loadCars() {
    yield put(loadCarsRoutine.request());
    const cars = yield call(() => getAllCars());
    yield put(loadCarsRoutine.success({cars: cars}));
}

function* watchLoadCars() {
    yield takeEvery(loadCarsRoutine.TRIGGER, loadCars);
}

function* addCar(action) {
    const newCar = action.payload;
    yield call(() => addCarRequest(newCar));
    yield put(loadCarsRoutine.trigger());
}

function* watchAddCar() {
    yield takeEvery(addCarRoutine.TRIGGER, addCar);
}

function* deleteCar(action) {
    const id = action.payload;
    yield put(deleteCarRoutine.request(id));
    yield call(() => deleteCarRequest(id));
    yield put(deleteCarRoutine.success());
    yield put(loadCarsRoutine.trigger());
}

function* watchDeleteCar() {
    yield takeEvery(deleteCarRoutine.TRIGGER, deleteCar);
}

function* editCar(action) {
    const {id, car} = action.payload;
    yield call(() => editCarRequest(id, car));
    yield put(loadCarsRoutine.trigger());
}

function* watchEditCar() {
    yield takeEvery(editCarRoutine.TRIGGER, editCar);
}

export default function* notifySagas() {
    yield all([
        watchLoadCars(),
        watchAddCar(),
        watchDeleteCar(),
        watchEditCar()
    ]);
}