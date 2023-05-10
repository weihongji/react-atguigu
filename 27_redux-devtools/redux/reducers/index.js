import { combineReducers } from "redux";
import calc from "./calc";
import person from "./person";

export default combineReducers({
    calc,
    person
});