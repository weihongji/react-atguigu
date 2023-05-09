import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import calcReducer from "./reducers/calc";
import personReducer from "./reducers/person";

const allReducers = combineReducers({ calc: calcReducer, person: personReducer });
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
