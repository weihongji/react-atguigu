import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./calc-reducer";

export default createStore(reducer, applyMiddleware(thunk));
