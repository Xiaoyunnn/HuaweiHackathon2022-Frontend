import { combineReducers } from "redux";
import user from "./user";
import attractions from "./attractions";
import itinerary from "./itinerary";

const rootReducer = combineReducers({
    user,
    attractions,
    itinerary
});

export default rootReducer;
