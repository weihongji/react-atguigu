import React from "react";
import PubSub from "pubsub-js";
import './index.css'

export default class List extends React.Component {
    state = {
        list: [],
        processing: false,
        errormsg: ''
    }

    componentDidMount() {
        this.token = PubSub.subscribe('search', (msg, data) => {
            this.setState(data);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        let { list, processing, errormsg } = this.state;
        return (
            <div className="list">
                {
                    processing ? <h1>Loading</h1> :
                    errormsg ? <h1 className="err">{errormsg}</h1> :
                    list.map(a => {
                        return (<div className="item" key={a.id}>
                            <img src={a.avatar_url} alt={a.login} />
                        </div>)
                    })
                }
            </div>
        )
    }
}