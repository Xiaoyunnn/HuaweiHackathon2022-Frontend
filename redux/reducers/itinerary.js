import {
    ITINERARY_ERROR,
    GET_ITINERARY,
    LOADING_ITINERARY,
    GENERATE_ITINERARY,
    STORE_DATE
} from "../actions/types";

const initialState = {
    current: null,
    date: null,
    generated: [],
    error: null,
    loading: false
}

const itinerary = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ITINERARY:
            return {
                ...state,
                current: payload
            }
        case GENERATE_ITINERARY:
            return {
                ...state,
                generated: payload.days,
                loading: false
            }
        case LOADING_ITINERARY:
            return {
                ...state,
                loading: true
            }
        case ITINERARY_ERROR:
            return {
                ...state,
                error: payload
            }
        case STORE_DATE:
            return {
                ...state,
                date: payload
            }
        default:
            return state;
    }
}

export default itinerary;
