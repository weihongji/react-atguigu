import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";
import NewsDetail from "./News/Detail";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Home content goes here</div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        {/* <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink> */}
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li className="nav-item">
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                </ul>
                <div className="m-3">
                    <Switch>
                        <Route path="/home/news" exact={true} component={News}></Route>
                        <Route path="/home/news/:id" component={NewsDetail}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}