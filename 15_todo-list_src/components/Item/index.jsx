import React from "react";
import "./index.css";

export default class Item extends React.Component {
    render() {
        let {id, text, done} = this.props;
        return (
            <div className="row justify-content-between item">
                <div className="col form-check">
                    <input className="form-check-input" type="checkbox" id={id} checked={done} onChange={this.handleCheck(id)} />
                    <label className="form-check-label" htmlFor={id}>{text}</label>
                </div>
                <div className="col-auto">
                    <button className="btn mb-1 btn-danger" onClick={this.removeIt(id)}>Delete</button>
                </div>
            </div>
        )
    }

    handleCheck = id => {
        return (e) => {
            this.props.updateItem(id, e.target.checked);
        }
    }

    removeIt = id => {
        return () => {
            this.props.deleteItem(id);
        }
    }
}