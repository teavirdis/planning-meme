import React, { Component } from 'react';
import $ from 'jquery';
import './css/style.css'

class CreateBoardButton extends Component {
    componentDidUpdate() {
        $('.boardButton').bootstrapToggle();
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
