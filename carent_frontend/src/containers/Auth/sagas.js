import {all, call, put, takeEvery} from "redux-saga/effects";
import {getUserRoutine, loginRoutine, registerRoutine} from "./routines";
import {getUserRequest, loginRequest, registerRequest} from "./service";

function* login(action) {
    const loginData = action.payload;
    yield put(loginRoutine.request());
    const response = yield call(() => loginRequest(loginData));
    yield put(loginRoutine.success({user: response.user, token: response.token}));
}

function* watchLogin() {
    yield takeEvery(loginRoutine.TRIGGER, login);
}

function* register(action) {
    const registerData = action.payload;
    yield put(registerRoutine.request());
    console.log(registerData)
    const response = yield call(() => registerRequest(registerData));
    yield put(registerRoutine.success({user: response.user, token: response.token}));
}

function* watchRegister() {
    yield takeEvery(registerRoutine.TRIGGER, register);
}

function* getUser() {
    const response = yield call(() => getUserRequest());
    if (response){
        yield put(getUserRoutine.success(response));
    }
}

function* watchGetUser() {
    yield takeEvery(getUserRoutine.TRIGGER, getUser);
}

export default function* authSagas() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchGetUser()
    ]);
}