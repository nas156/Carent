import {addCarRoutine, deleteCarRoutine, editCarRoutine, loadCarsRoutine} from "./routines";

const initialState = {
    cars: [],
    isLoading: false,
    isEditing: "",
    isDeleting: "",
    isAdding: false
};

export default function (state = initialState, action) {
    switch (action.type){
        case loadCarsRoutine.SUCCESS: {
            const newCars = action.payload.cars;
            return ({
                ...state,
                isLoading: false,
                cars: newCars
            });
        }

        case loadCarsRoutine.REQUEST: {
            return ({
               ...state,
               isLoading: true
            });
        }

        case deleteCarRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isDeleting: id
            });
        }

        case deleteCarRoutine.SUCCESS: {
            return ({
               ...state,
               isDeleting: ""
            });
        }

        case addCarRoutine.REQUEST: {
            return ({
                ...state,
                isAdding: true
            });
        }

        case addCarRoutine.SUCCESS: {
            return ({
                ...state,
                isAdding: false
            });
        }

        case editCarRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isEditing: id
            });
        }

        case editCarRoutine.SUCCESS: {
            return ({
                ...state,
                isEditing: ""
            });
        }

        default:
            return state;
    }
};
