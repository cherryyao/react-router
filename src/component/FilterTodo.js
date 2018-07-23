import React, { Component } from 'react';

export default class FilterList extends React.Component {
    render() {
        console.log(this.props.filter)
        let status = this.props.filter; 
        let {changeStatusHandler} = this.props;
         console.log(status)
        return (
            <div>
                <ul id="filters">
                    <li onClick={ ev => changeStatusHandler('all')}>
                        <a href="../" data-filter="all" className={status === undefined ? 'selected' : ''} >
                       ALL
                                </a>
                    </li>
                    <li onClick={ ev => changeStatusHandler('active')}>
                        <a href="active" data-filter="active" className={status === 'active' ? 'selected' : ''}>
                      Active
                        </a>
                    </li>
                    <li onClick={ ev => changeStatusHandler('completed')}>
                        <a href="completed" data-filter="completed" className={status === 'completed' ? 'selected' : ''}>
                        Complete
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}