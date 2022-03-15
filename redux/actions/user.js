import {
    LOGIN_USER,
    SIGNUP_USER,
    UPDATE_USER,
    LOGIN_ERROR,
    USER_ERROR,
    SIGNUP_ERROR,
    GET_USER
} from "./types";
import axios from "axios";
import { url } from "../../utils/constants";
import { saveItem } from "../../utils/deviceStorage";

const userURL = url + "/user/";

export const loginUser = body => async dispatch => {
    try {
        const res = await axios.post(userURL + "login", body);
        saveItem("user", res.data);
        
        console.log("LOGIN_USER dispatched");
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err.message
        })
    }
}

export const updateUser = body => async dispatch => {
    try {
        const res = await axios.post(userURL + "updateUser", body);

        console.log("UPDATE_USER dispatched");
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        })
    }
}

export const signupUser = body => async dispatch => {
    try {
        const res = await axios.post(userURL + "signup", body);

        console.log("SIGNUP_USER dispatched");
        dispatch({
            type: SIGNUP_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SIGNUP_ERROR,
            payload: err.message
        })
    }
}

export const getUser = id => async dispatch => {
    try {
        const res = await axios.get(userURL + id);

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        })
    }
}
