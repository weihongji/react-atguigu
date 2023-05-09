import React from "react";
import { connect } from "react-redux";

import {
    CalcIncrementAction,
    CalcDecrementAction,
    CalcIncrementAsycAction
} from "../../redux/actions/calc";

class Calc extends React.Component {
    selNumbers = React.createRef();

    add = () => {
        let value = this.selNumbers.current.value * 1;
        this.props.add(value);
    }

    sub = () => {
        let value = this.selNumbers.current.value * 1;
        this.props.sub(value);
    }

    addIfOdd = () => {
        let { result } = this.props;
        if (result % 2 !== 0) {
            let value = this.selNumbers.current.value * 1;
            this.props.add(value);
        }
    }

    addSync = () => {
        let value = this.selNumbers.current.value * 1;
        this.props.addAsync(value, 500);
    }

    render() {
        return (
            <div>
                <div>Result: {this.props.result}</div>
                <div>
                    <select ref={this.selNumbers} style={{ 'width': '100px' }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.add} style={{ 'width': '50px' }}>+</button>&nbsp;
                    <button onClick={this.sub} style={{ 'width': '50px' }}>-</button>&nbsp;
                    <button onClick={this.addIfOdd} style={{ 'width': '100px' }}>Add if odd</button>&nbsp;
                    <button onClick={this.addSync} style={{ 'width': '100px' }}>Add Async</button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ result: state.calc }),
    {
        add: CalcIncrementAction,
        sub: CalcDecrementAction,
        addAsync: CalcIncrementAsycAction
    }
)(Calc);