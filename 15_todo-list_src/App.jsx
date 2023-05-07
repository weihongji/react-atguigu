import React from "react";
import {nanoid} from "nanoid";
import Todo from './components/Todo';
import Add from "./components/Add";
import List from "./components/List";
import Summary from "./components/Summary";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const todos = [];
        todos.push(new Todo(nanoid(), 'Morning', true));
        todos.push(new Todo(nanoid(), 'Afternoon', false));
        todos.push(new Todo(nanoid(), 'Evening', false));
        this.state = {todos: todos};
    }

    render() {
        return (
            <div className="container" style={{maxWidth: '400px'}}>
                <Add addItem={this.addItem} />
                <List todos={this.state.todos} updateItem={this.updateItem} deleteItem={this.deleteItem} />
                <Summary todos={this.state.todos} checkAll={this.checkAll} />
            </div>
        )
    }

    componentDidMount() {
        let inputs = document.getElementsByTagName("input");
        if (inputs.length > 0) {
            inputs[0].focus();
        }
    }

    addItem = text => {
        let todo = new Todo(nanoid(), text, false);
        const list = [todo, ...this.state.todos];
        this.setState({todos: list});
    }

    updateItem = (id, done) => {
        const list = this.state.todos;
        for (let i = 0; i < list.length; i++) {
            if (id === list[i].id) {
                list[i].done = done;
            }
            
        }
        this.setState({todos: list});
    }

    deleteItem = id => {
        const list = this.state.todos.filter(x => {
            return x.id !== id;
        });
        this.setState({todos: list});
    }

    checkAll = value => {
        const list = this.state.todos.map(x => {
            x.done = value;
            return x;
        });
        this.setState({todos: list});
    }
}