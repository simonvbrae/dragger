import React, { Component } from "react";
import Space from './space'

export default class Container extends Component {
    render() {
        let spaces = [];

        spaces.push(<Space data={{className:"blue"}}></Space>);
        for (let i = 0; i < this.props.spaces; i++){
            spaces.push(<Space></Space>);
        }

        return (
            // Horizontal box
            // X spaces for draggables
            <div>
                {spaces}
            </div>
        )
    }
}
