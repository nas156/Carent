import {getUserRoutine, loginRoutine, logoutRoutine, registerRoutine} from "./routines";

const initialState = {
    user: {},
    isAuthorized: false,
    isFetching: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case registerRoutine.SUCCESS:
        case loginRoutine.SUCCESS: {
            const  { user, token } = action.payload;
            localStorage.setItem("token", token);
            return ({
                ...state,
                user: user,
                isAuthorized: true,
                isFetching: false
            });
        }

        case registerRoutine.REQUEST:
        case loginRoutine.REQUEST: {
            return ({
                ...state,
                isFetching: true
            });
        }

        case getUserRoutine.SUCCESS: {
            const user = action.payload;
            return ({
                ...state,
                isAuthorized: true,
                user: user
            });
        }

        case logoutRoutine.TRIGGER: {
            localStorage.setItem("token", "");
            return ({
                ...state,
               isAuthorized: false,
               user: {}
            });
        }

        default:
            return state;
    }
}