import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { AddPersonAction } from "../../redux/actions/person";

class Person extends React.Component {
    txtName = React.createRef();
    txtAge = React.createRef();

    add = () => {
        let name = this.txtName.current.value;
        let age = this.txtAge.current.value;
        this.props.add({ id: nanoid(), name, age });
    }

    render() {
        return (
            <div>
                <h1>当前总人数：{this.props.people.length}, 上面的计算结果是：{this.props.calcResult}</h1>
                <input type="text" ref={this.txtName} placeholder="Name..." />
                <input type="text" ref={this.txtAge} placeholder="Age..." />
                <button onClick={this.add}>Add</button>

                <ul>
                    {
                        this.props.people.map(p => {
                            return (
                                <li key={p.id}>{p.name} at {p.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ people: state.person, calcResult: state.calc }),
    {
        add: AddPersonAction
    }
)(Person);