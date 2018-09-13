import React, { Component } from 'react';
import './css/style.css'

const $ = window.jQuery;

class CreateBoardButton extends Component {
    componentDidUpdate() {
        $('.boardButton').toggle();
    }
    render() {
        return (
            <div className="no-left-padding">
                <a className="boardButton btn btn-primary pull-right fa btn btn-default" data-toggle="modal" href="#createBoard"><i className="fa fa-plus"/> Create Board</a>
            </div>
        );
    }
}

export default CreateBoardButton;
