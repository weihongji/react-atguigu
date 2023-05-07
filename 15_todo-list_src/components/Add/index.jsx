import React from "react";

export default class Add extends React.Component {
    render() {
        return (
            <div className="row mb-3">
                <input className="form-control" type="text" onKeyDown={this.addItem} placeholder="输入内容并回车确认" />
            </div>
        )
    }

    addItem = e => {
        if (e.key === 'Enter') {
            let text = e.target.value.trim();
            if (text.length > 0) {
                this.props.addItem(text);
                e.target.value = "";
            }
        }
    }
}