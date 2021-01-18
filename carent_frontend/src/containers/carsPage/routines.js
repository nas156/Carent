import { createRoutine } from 'redux-saga-routines';

export const loadCarsRoutine = createRoutine("loadCars");
export const editCarRoutine = createRoutine("editCar");
export const addCarRoutine = createRoutine("addCar");
export const deleteCarRoutine = createRoutine("deleteCar");