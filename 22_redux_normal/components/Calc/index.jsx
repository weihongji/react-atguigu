import React from "react";
import store from "../../redux/store";
import { CalcIncrementAction, CalcDecrementAction } from "../../redux/calc-action";

export default class Calc extends React.Component {
    selNumbers = React.createRef();

    increment = () => {
        let value = this.selNumbers.current.value * 1;
        store.dispatch(CalcIncrementAction(value));
    }

    decrement = () => {
        let value = this.selNumbers.current.value * 1;
        store.dispatch(CalcDecrementAction(value));
    }

    addIfOdd = () => {
        let result = store.getState();
        if (result % 2 > 0) {
            let value = this.selNumbers.current.value * 1;
            store.dispatch(CalcIncrementAction(value));
        }
    }

    addSync = () => {
        setTimeout(() => {
            let value = this.selNumbers.current.value * 1;
            store.dispatch(CalcIncrementAction(value));
        }, 500);
    }

    render() {
        return (
            <div>
                <div>Result: {store.getState()}</div>
                <div>
                    <select ref={this.selNumbers} style={{ 'width': '100px' }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment} style={{ 'width': '50px' }}>+</button>&nbsp;
                    <button onClick={this.decrement} style={{ 'width': '50px' }}>-</button>&nbsp;
                    <button onClick={this.addIfOdd} style={{ 'width': '100px' }}>Add if odd</button>&nbsp;
                    <button onClick={this.addSync} style={{ 'width': '100px' }}>Add Async</button>
                </div>
            </div>
        )
    }
}