import {addUserRoutine, deleteUserRoutine, editUserRoutine, loadUsersRoutine} from "./routines";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {addUserRequest, deleteUserRequest, editUserRequest, getAllUsers} from "./service";

function* loadUsers() {
    yield put(loadUsersRoutine.request());
    const users = yield call(() => getAllUsers());
    yield put(loadUsersRoutine.success({users: users}));
}

function* watchLoadUsers() {
    yield takeEvery(loadUsersRoutine.TRIGGER, loadUsers);
}

function* addUser(action) {
    const newCar = action.payload;
    yield put(addUserRoutine.request());
    yield call(() => addUserRequest(newCar));
    yield put(addUserRoutine.success());
    yield put(loadUsersRoutine.trigger());
}

function* watchAddUser() {
    yield takeEvery(addUserRoutine.TRIGGER, addUser);
}

function* deleteUser(action) {
    const id = action.payload;
    yield put(deleteUserRoutine.request(id));
    yield call(() => deleteUserRequest(id));
    yield put(deleteUserRoutine.success());
    yield put(loadUsersRoutine.trigger());
}

function* watchDeleteUser() {
    yield takeEvery(deleteUserRoutine.TRIGGER, deleteUser);
}

function* editUser(action) {
    const {id, user} = action.payload;
    yield put(editUserRoutine.request(id));
    yield call(() => editUserRequest(id, user));
    yield put(editUserRoutine.success());
    yield put(loadUsersRoutine.trigger());
}

function* watchEditUser() {
    yield takeEvery(editUserRoutine.TRIGGER, editUser);
}

export default function* usersSagas() {
    yield all([
        watchLoadUsers(),
        watchAddUser(),
        watchDeleteUser(),
        watchEditUser()
    ]);
}