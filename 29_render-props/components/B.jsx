import React from "react";

export default class A extends React.Component {
    render() {
        return (
            <div className="b">
                <h1>Component B</h1>
                <h2>Car: {this.props.car}</h2>
            </div>
        )
    }
}