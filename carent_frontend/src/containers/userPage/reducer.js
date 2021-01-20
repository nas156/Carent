import {addUserRoutine, deleteUserRoutine, editUserRoutine, loadUsersRoutine} from "./routines";

const initialState = {
    users: [],
    isLoading: false,
    isEditing: "",
    isDeleting: "",
    isAdding: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case loadUsersRoutine.SUCCESS: {
            const users = action.payload.users;
            return ({
                ...state,
                isLoading: false,
                users: users
            });
        }

        case loadUsersRoutine.REQUEST: {
            return ({
                ...state,
                isLoading: true
            });
        }

        case deleteUserRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isDeleting: id
            });
        }

        case deleteUserRoutine.SUCCESS: {
            return ({
                ...state,
                isDeleting: ""
            });
        }

        case addUserRoutine.REQUEST: {
            return ({
                ...state,
                isAdding: true
            });
        }

        case addUserRoutine.SUCCESS: {
            return ({
                ...state,
                isAdding: false
            });
        }

        case editUserRoutine.REQUEST: {
            const id = action.payload;
            return ({
                ...state,
                isEditing: id
            });
        }

        case editUserRoutine.SUCCESS: {
            return ({
                ...state,
                isEditing: ""
            });
        }

        default:
            return state;
    }
};
