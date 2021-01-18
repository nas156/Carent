import { createRoutine } from 'redux-saga-routines';

export const loadUsersRoutine = createRoutine("loadUsers");
export const editUserRoutine = createRoutine("editUser");
export const addUserRoutine = createRoutine("addUser");
export const deleteUserRoutine = createRoutine("deleteUser");