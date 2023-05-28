import React from "react";

export default class A extends React.PureComponent {
    state = { car: 'Benz' }

    render() {
        console.log('Parent render ------------');
        const { car } = this.state;
        return (
            <div className="a">
                <h1>Component A: {car} &nbsp;&nbsp;
                    <button onClick={this.changeCar}>Change</button>
                </h1>
                <br />
                <B car={car} />
            </div>
        )
    }

    changeCar = () => {
        console.log('Setting to Audi...');
        this.setState({ car: 'Audi' })
    }
}

class B extends React.PureComponent {
    render() {
        console.log('Child render ------------');
        return (
            <div className="b">
                <h1>Component B: {this.props.car}</h1>
            </div>
        )
    }
}