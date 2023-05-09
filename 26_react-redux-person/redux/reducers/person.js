import { ADD_PERSON } from "../constant";

let initState = [{id: '001', name: 'Tom', age: 18}];

export default function reducer(preState = initState, action) {
    const {type, data} = action;

    switch (type) {
        case ADD_PERSON:
            return [...preState, data];
        default:
            return preState;
    }
}