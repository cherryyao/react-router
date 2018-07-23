import React, { Component } from 'react';

export default class InputList extends React.Component {
    constructor() {
        super();
        
        this.textValue = React.createRef();
    }

    addItem = () => {
        const inputValue = this.textValue.current.value
        if(inputValue === ""){
            alert("Can not empty!")
            return;
        }
        this.props.addHandler(inputValue)
        this.textValue.current.value = ""
    }

    render() {       
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" ref={this.textValue}/>
                <div id="button" onClick={this.addItem}>Add</div>
            </div>
        );
    }
}