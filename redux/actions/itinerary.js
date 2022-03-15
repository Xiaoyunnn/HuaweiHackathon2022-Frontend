import {
    GET_ITINERARY,
    GENERATE_ITINERARY,
    ITINERARY_ERROR
} from "./types";
import axios from "axios";
import { url } from "../../utils/constants";

const baseUrl = url + "/itinerary/";

export const getItinerary = id => async dispatch => {
    try {
        const res = await axios.get(baseUrl + id);

        dispatch({
            type: GET_ITINERARY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ITINERARY_ERROR,
            payload: err.message
        })
    }    
}

export const generateItinerary = body => async dispatch => {
    try {
        const res = await axios.post(baseUrl + "generateItinerary", body);

        dispatch({
            type: GENERATE_ITINERARY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ITINERARY_ERROR,
            payload: err.message
        })
    }
}

