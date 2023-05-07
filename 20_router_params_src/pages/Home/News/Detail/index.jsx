import React from "react";
import { Link } from "react-router-dom";

export default class Detail extends React.Component {
    newsArray = [
        { id: 1, title: 'News #1', content: '国内新闻：这是第一条新闻的内容。' },
        { id: 2, title: 'News #2', content: '国际新闻：这是第二条新闻的内容。' },
        { id: 3, title: 'News #3', content: '天气预报：这是第三条新闻的内容。' }
    ];

    render() {
        let { id } = this.props.match.params;
        let news = this.newsArray.find(x => {
            return x.id === Number.parseInt(id);
        })
        const { title, content } = news;
        return (
            <div>
                <div><Link to="/home/news">新闻列表</Link></div>
                <ul>
                    <li>ID: {id}</li>
                    <li>TITLE: {title}</li>
                    <li>CONTENT: {content}</li>
                </ul>
            </div>
        )
    }
}