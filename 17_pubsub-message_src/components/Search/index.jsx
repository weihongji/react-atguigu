import React from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends React.Component {
    txtSearch = React.createRef();

    render() {
        return (
            <div>
                <input type="text" ref={this.txtSearch} placeholder="Type text to search..." />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }

    search = () => {
        let value = this.txtSearch.current.value.trim();
        if (value.length === 0) return;
        PubSub.publish('search', {processing:true, errormsg:'', list:[]});
        axios.get('https://api.github.com/search/users?q=' + value).then(response => {
            PubSub.publish('search', {processing:false, errormsg:'', list: response.data.items})
        }, reason => {
            console.log(reason);
            PubSub.publish('search', {processing:false, errormsg:'Error occurrs...', list: []})
        })
    }
}