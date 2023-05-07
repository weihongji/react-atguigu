import React from "react";
import Calc from "./container/Calc";
import store from "./redux/store";

export default class App extends React.Component {
    render() {
        return (
            <Calc store={store} />
        )
    }
}