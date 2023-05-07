import React from "react";

export default class Summary extends React.Component {
    handleCheck = (e) => {
        this.props.checkAll(e.target.checked);
    }

    render() {
        let {todos} = this.props;
        let doneCount = todos.reduce((total, item) => total += item.done ? 1 : 0, 0);
        let totalCount = todos.length;
        return (
            <div className="row">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="chkSummary" checked={doneCount > 0 && doneCount === totalCount} onChange={this.handleCheck} />
                    <label className="form-check-label" htmlFor="chkSummary">{doneCount}/{totalCount} selected</label>
                </div>
            </div>
        )
    }
}