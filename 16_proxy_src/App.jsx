import React from "react";
import axios from "axios";

export default class App extends React.Component {
    state = { list: [] }

    render() {
        return (
            <div>
                <button onClick={this.getStudents}>Show Students</button>
                <button onClick={this.getCars}>Show Cars</button>
                <ol>
                    {
                        this.state.list.map(s => {
                            return <li key={s.id}>{`${s.name} (#${s.id})`}</li>
                        })
                    }
                </ol>
            </div>
        )
    }

    getStudents = () => {
        // Run "json-server -p 5000 db.json" under "src" directory to start the web API.
        axios.get('http://localhost:3000/api/student').then(response => {
            let { data } = response;
            let newState = data instanceof Array ? data : [];
            this.setState({ list: newState });
        }, error => {
            console.error('出错了：', error);
        })
    }

    getCars = () => {
        // Run "json-server -p 5001 db-car.json" under "src" directory to start the web API.
        axios.get('http://localhost:3000/api-car/car').then(response => {
            let { data } = response;
            let newState = data instanceof Array ? data : [];
            this.setState({ list: newState });
        }, error => {
            console.error('出错了：', error);
        })
    }
}