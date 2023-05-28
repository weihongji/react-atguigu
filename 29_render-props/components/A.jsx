import React from "react";

export default class A extends React.Component {
    state = { car: 'Benz' }

    render() {
        return (
            <div className="a">
                <h1>Component A</h1>
                {this.props.render(this.state.car)}
            </div>
        )
    }
}