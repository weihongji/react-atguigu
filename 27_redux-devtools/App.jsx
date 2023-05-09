import React from "react";
import Calc from "./container/Calc";
import Person from "./container/Person";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Calc />
                <hr />
                <Person />
            </div>
        )
    }
}