import {
    ITINERARY_ERROR,
    GET_ITINERARY,
    LOADING_ITINERARY,
    GENERATE_ITINERARY
} from "../actions/types";

const initialState = {
    current: null,
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
                generated: [payload],
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
        default:
            return state;
    }
}

export default itinerary;
