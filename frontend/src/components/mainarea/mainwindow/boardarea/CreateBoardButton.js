import React, { Component } from 'react';
import './css/style.css'

class CreateBoardButton extends Component {
    render() {
        return (
            <div className="no-left-padding">
                <a className="btn btn-primary pull-right fa btn btn-default" data-toggle="modal" href="#createBoard">
                    <i className="fa fa-plus"/> Create Board
                </a>
            </div>
        );
    }
}

export default CreateBoardButton;
