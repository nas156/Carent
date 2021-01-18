import {addUserRoutine, deleteUserRoutine, editUserRoutine, loadUsersRoutine} from "./routines";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {addUserRequest, deleteUserRequest, editUserRequest, getAllUsers} from "./service";

function* loadUsers() {
    yield put(loadUsersRoutine.request());
    const users = yield call(() => getAllUsers());
    console.log(users)
    yield put(loadUsersRoutine.success({users: users}));
}

function* watchLoadUsers() {
    yield takeEvery(loadUsersRoutine.TRIGGER, loadUsers);
}

function* addUser(action) {
    const newCar = action.payload;
    yield call(() => addUserRequest(newCar));
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
    yield call(() => editUserRequest(id, user));
    yield put(loadUsersRoutine.trigger());
}

function* watchEditUser() {
    yield takeEvery(editUserRoutine.TRIGGER, editUser);
}

export default function* notifySagas() {
    yield all([
        watchLoadUsers(),
        watchAddUser(),
        watchDeleteUser(),
        watchEditUser()
    ]);
}