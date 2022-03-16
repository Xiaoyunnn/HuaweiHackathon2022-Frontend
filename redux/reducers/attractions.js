import { 
    GET_ALL_ATTRACTIONS,
    GENERATED_ATTRACTION,
    ATTRACTION_ERROR
} from "../actions/types";

const initialState = {
    all: [],
    generated: [],
    error: null,
}

const attractions = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_ATTRACTIONS:
            return {
                ...state,
                all: payload,
                error: null
            }
        case GENERATED_ATTRACTION:
            const generated = [...state.generated];
            generated.push(payload);
            return {
                ...state,
                generated: generated,
            }
        case ATTRACTION_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default attractions;
