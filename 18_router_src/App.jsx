import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        {/* <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink> */}
                        <MyNavLink to="/home">Home</MyNavLink>
                    </li>
                    <li className="nav-item">
                        <MyNavLink to="/about">About</MyNavLink>
                    </li>
                </ul>
                <div className="m-3">
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Redirect to="/about" />
                    </Switch>
                </div>
            </div>
        )
    }
}