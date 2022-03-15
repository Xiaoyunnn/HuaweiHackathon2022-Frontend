import {
    LOGIN_USER,
    UPDATE_USER,
    SIGNUP_USER,
    LOGIN_ERROR,
    GET_USER
} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    isTourGuide: false,
    userId: null,
    name: null,
    nationality: null,
    age: null,
    interest: null,
    currentItinerary: null,
    token: null,
    error: null
};

const user = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER:
            return {
                ...state,
                ...payload
            }
        case LOGIN_USER:
            return {
                isAuthenticated: true,
                userId: payload.userId,
                name: payload.name,
                token: payload.token,
                error: null
            }
        case UPDATE_USER:
            return {
                ...state,
                error: null,
                ...payload
            }
        case LOGIN_ERROR:
            return {
                isAuthenticated: false,
                userId: null,
                name: null,
                nationality: null,
                age: null,
                interest: null,
                currentItinerary: null,
                token: null,
                error: payload
            }
        case SIGNUP_USER:
        default:
            return state;
    }
}

export default user;
