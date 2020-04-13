import React, { Component } from "react";
import Draggable from './draggable';
import './draggable.css';

export default class Space extends Component {
    constructor(props) {
        super(props);
        if (this.props.data){
            this.draggable = <Draggable data={this.props.data}></Draggable>
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        // TODO if this contains a draggable => switch the 2 around (using id of source container received from dragstuff)
        ev.preventDefault();
        var data = ev.dataTransfer.getData("draggingThingyId");
        var element = document.getElementById(data);
        console.log("element");
        console.log(element);
        try {
            ev.target.appendChild(element);
        } catch (error) {
            // I'm so lazy, holy shit
            // TODO keep a reference to the div containing the draggable.
        }
        element.removeAttribute('id');
    }

    render() {
        return (
            <div className={"rectangle"} onDragOver={this.allowDrop} onDrop={this.drop}>
                {this.draggable}
            </div>
        )
    }
}

