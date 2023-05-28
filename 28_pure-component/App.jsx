import React from "react";
import A from "./components/A"
import './index.css'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Root Component</h1>
                <A />
            </div>
        )
    }
}