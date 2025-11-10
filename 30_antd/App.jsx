import React from "react";
import { Button, DatePicker } from 'antd';

export default class App extends React.Component {
    onDateChange = (date, dateString) => {
        console.log(date, dateString);
      };

    render() {
        return (
            <div>
                App...
                <Button style={{ margin: "5px" }} type="primary">Primary Button</Button>
                <Button style={{ margin: "5px" }} type="primary">Normal Button</Button>
                <Button style={{ margin: "5px" }} type="link">Link Button</Button>
                <br />
                <DatePicker onChange={this.onDateChange} />
            </div>
        )
    }
}