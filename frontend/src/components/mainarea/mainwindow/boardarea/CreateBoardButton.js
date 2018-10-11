import React, { Component } from 'react';
import './style/style.css'
import {CreateBoardButtonAttribute, CreateButton} from "../style/MainWindowStyle";

class CreateBoardButton extends Component {
    render() {
        return (
            <CreateButton>
                <CreateBoardButtonAttribute>
                    <i className="fa fa-plus"/> Create Board
                </CreateBoardButtonAttribute>
            </CreateButton>
        );
    }
}

export default CreateBoardButton;
