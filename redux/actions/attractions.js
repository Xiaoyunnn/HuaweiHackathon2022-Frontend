import {
    GET_ALL_ATTRACTIONS,
    GENERATED_ATTRACTION,
    ATTRACTION_ERROR,
} from "./types";
import axios from "axios";
import { url } from "../../utils/constants";

const attUrl = url + "/attraction/";

export const getAllAttractions = () => async dispatch => {
    try {
        const res = await axios.get(attUrl + "getAllAttractions");

        console.log("DISPATCHED ATTRACTIONS");
        dispatch({
            type: GET_ALL_ATTRACTIONS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ATTRACTION_ERROR,
            payload: err.message
        })
    }
};

export const getGeneratedAttractions = (arr) => async dispatch => {
    try {
        var gen = [];
        for (i = 0; i < arr.length; i++) {
            const res = await axios.get(attUrl + "getAttractionById/" + id);
            gen.push(res.data);
        }

        dispatch({
            type: GENERATED_ATTRACTION,
            payload: gen
        })
    } catch (err) {
        dispatch({
            type: ATTRACTION_ERROR,
            payload: err.message
        })
    }
};
