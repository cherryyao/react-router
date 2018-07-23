import React, { Component } from 'react';

export default class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: 'read'
        };
    } 

    changeToEditable() {
        this.setState({ status: 'write' });
    }
    
    updateItem(e, id, name) {
        if (e.keyCode === 13) {
            this.props.updateItemContent(id, name);
            this.setState({ status: 'read' });
        }
    }
    
        
    toggleActive = (id,status) => {
        this.setState({ status: 'read' });
        this.props.toggleActiveHandler(id,status);
    }
  


    render() {
        const todos = this.props.todos;
       
        return (
            <div >
                <ol>
                    {todos.map(item => 
                        <li className = {item.status === 'completed' ? 'checked':''}>          
                             <input
                                type="checkbox"
                                className="done-todo"
                                // defaultChecked={item.status}
                                checked={item.status === 'completed' ?'checked':''}
                                onChange={e => this.toggleActive(item.id,item.status)}
                            />
                        
                            <span onDoubleClick={e => this.changeToEditable(e)}>
                                {this.state.status === 'read' ? (
                                    item.content
                                ) : (
                                    <input
                                    autoFocus
                                    className="edit-input"
                                    defaultValue={item.content}
                                    onKeyUp={e =>
                                        this.updateItem(e, item.id, e.currentTarget.value)
                                    }
                                    />
                                )}
                            </span>
                        </li>                     
                    )}             
                </ol>
            </div>             
        );
    }
}
