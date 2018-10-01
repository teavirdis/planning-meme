import React, { Component } from 'react';
import './css/style.css'

class BoardUsers extends Component {
    render() {
        return (
            <div className="row grayed-box-app">
                <a className="btn btn-primary pull-right fa btn btn-default" href="#createBoard" data-toggle="modal">
                    <i className="fa fa-plus"/> Create Board
                </a>
            </div>
        );
    }
}

export default BoardUsers;
