import { INCREMENT, DECREMENT } from "./constant";

export const CalcIncrementAction = data => ({ type: INCREMENT, data });
export const CalcDecrementAction = data => ({ type: DECREMENT, data });

export const CalcIncrementAsycAction = (data, interval) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(CalcIncrementAction(data));
        }, interval)
    }
}