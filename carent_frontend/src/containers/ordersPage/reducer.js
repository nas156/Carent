import {
    createOrderRoutine,
    deleteOrderRoutine,
    loadOrdersRoutine,
    loadUserNumbersAndCarNumbersRoutine
} from "./routines";

const initialState = {
    orders: [],
    isLoading: false,
    isDeleting: "",
    isCreating: false,
    passports: [{}],
    numbers: [{}],
    loadingOptions: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case loadOrdersRoutine.SUCCESS: {
            const orders = action.payload.cars;
            return ({
                ...state,
                isLoading: false,
                orders: orders
            });
        }

        case loadOrdersRoutine.REQUEST: {
            return ({
                ...state,
                isLoading: true
            });
        }

        case deleteOrderRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isDeleting: id
            });
        }

        case deleteOrderRoutine.SUCCESS: {
            return ({
                ...state,
                isDeleting: ""
            });
        }

        case createOrderRoutine.REQUEST: {
            return ({
                ...state,
                isCreating: true
            });
        }

        case createOrderRoutine.SUCCESS: {
            return ({
                ...state,
                isCreating: false
            });
        }

        case loadUserNumbersAndCarNumbersRoutine.REQUEST: {
            return ({
                ...state,
                loadingOptions: true
            });
        }

        case loadUserNumbersAndCarNumbersRoutine.SUCCESS: {
            const {numbers, passports} = action.payload;
            return ({
                ...state,
                numbers: numbers,
                passports: passports,
                loadingOptions: false
            });
        }

        default:
            return state;
    }
};
