import {addClientRoutine, deleteClientRoutine, editClientRoutine, loadClientsRoutine} from "./routines";

const initialState = {
    clients: [],
    isLoading: false,
    isEditing: "",
    isDeleting: "",
    isAdding: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case loadClientsRoutine.SUCCESS: {
            const clients = action.payload.clients;
            return ({
                ...state,
                isLoading: false,
                clients: clients
            });
        }

        case loadClientsRoutine.REQUEST: {
            return ({
                ...state,
                isLoading: true
            });
        }

        case deleteClientRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isDeleting: id
            });
        }

        case deleteClientRoutine.SUCCESS: {
            return ({
                ...state,
                isDeleting: ""
            });
        }

        case addClientRoutine.REQUEST: {
            return ({
                ...state,
                isAdding: true
            });
        }

        case addClientRoutine.SUCCESS: {
            return ({
                ...state,
                isAdding: false
            });
        }

        case editClientRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isEditing: id
            });
        }

        case editClientRoutine.SUCCESS: {
            return ({
                ...state,
                isEditing: ""
            });
        }

        default:
            return state;
    }
};
