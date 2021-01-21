import { createRoutine } from 'redux-saga-routines';

export const loadClientsRoutine = createRoutine("loadClients");
export const editClientRoutine = createRoutine("editClient");
export const addClientRoutine = createRoutine("addClient");
export const deleteClientRoutine = createRoutine("deleteClient");