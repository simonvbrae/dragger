import React, { Component } from "react";
import './draggable.css';

export default class Draggable extends Component {
    constructor(props){
        super(props);

        this.data = props.data;
    }

    // onDraggableDropped
    drag(event) {
        console.log(event);
        event.target.id = "draggingThingyId";
        event.dataTransfer.setData("draggingThingyId", event.target.id);
        
        console.log(event.target.id);
    }

    render() {
        let cssClassName;
        try {
            cssClassName = this.props.data.className;
        } catch (error) {
            // shitty code (but it works)
        }
        return (
            <div onDragStart={this.drag} draggable={"true"} className={cssClassName + " rectangle"} style={{background: cssClassName}}></div>
        )
    }
}

