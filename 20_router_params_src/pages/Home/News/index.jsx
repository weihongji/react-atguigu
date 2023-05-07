import React from "react";
import { Link } from "react-router-dom";

export default class News extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/home/news/1">News #1</Link></li>
                <li><Link to="/home/news/2">News #2</Link></li>
                <li><Link to="/home/news/3">News #3</Link></li>
            </ul>
        )
    }
}