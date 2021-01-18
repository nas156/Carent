import {deleteCarRoutine, loadCarsRoutine} from "./routines";

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
            console.log(id);
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

        default:
            return state;
    }
};
