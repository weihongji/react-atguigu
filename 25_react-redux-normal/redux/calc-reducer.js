import { INCREMENT, DECREMENT } from "./constant";

let initState = 0;

export default function calcReducer(preState = initState, action) {
    const {type, data} = action;

    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}