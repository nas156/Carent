import { createRoutine } from 'redux-saga-routines';

export const loadOrdersRoutine = createRoutine("loadOrders");
export const createOrderRoutine = createRoutine("addOrder");
export const deleteOrderRoutine = createRoutine("deleteOrder");
export const loadUserNumbersAndCarNumbersRoutine = createRoutine("loadUserNumbersAndCarNumbers");