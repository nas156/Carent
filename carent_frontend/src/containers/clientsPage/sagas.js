import {addClientRoutine, deleteClientRoutine, editClientRoutine, loadClientsRoutine} from "./routines";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {addClientRequest, deleteClientRequest, editClientRequest, getAllClients} from "./service";

function* loadClients() {
    yield put(loadClientsRoutine.request());
    const clients = yield call(() => getAllClients());
    yield put(loadClientsRoutine.success({clients: clients}));
}

function* watchLoadClients() {
    yield takeEvery(loadClientsRoutine.TRIGGER, loadClients);
}

function* addClient(action) {
    const newCar = action.payload;
    yield put(addClientRoutine.request());
    yield call(() => addClientRequest(newCar));
    yield put(addClientRoutine.success());
    yield put(loadClientsRoutine.trigger());
}

function* watchAddClient() {
    yield takeEvery(addClientRoutine.TRIGGER, addClient);
}

function* deleteClient(action) {
    const id = action.payload;
    yield put(deleteClientRoutine.request(id));
    yield call(() => deleteClientRequest(id));
    yield put(deleteClientRoutine.success());
    yield put(loadClientsRoutine.trigger());
}

function* watchDeleteClient() {
    yield takeEvery(deleteClientRoutine.TRIGGER, deleteClient);
}

function* editClient(action) {
    const {id, client} = action.payload;
    yield put(editClientRoutine.request(id));
    yield call(() => editClientRequest(id, client));
    yield put(editClientRoutine.success());
    yield put(loadClientsRoutine.trigger());
}

function* watchEditClient() {
    yield takeEvery(editClientRoutine.TRIGGER, editClient);
}

export default function* clientsSagas() {
    yield all([
        watchLoadClients(),
        watchAddClient(),
        watchDeleteClient(),
        watchEditClient()
    ]);
}