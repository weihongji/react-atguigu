import React from "react";
import Item from "../Item";

export default class List extends React.Component {
    render() {
        const todos = this.props.todos || [];
        return (
            <div className="mb-3">
            {
                todos.map(item => {
                    return (
                        <Item key={item.id} {...item} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />
                    )
                })
            }
            </div>
        )
    }
}