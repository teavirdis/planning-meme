import React, { Component } from 'react';
import './style/style.css'
import {ButtonAttribute, CreateButton} from "../style/MainWindowStyle";

class CreateBoardButton extends Component {
    render() {
        return (
            <CreateButton>
                <ButtonAttribute>
                    <i className="fa fa-plus"/> Create Board
                </ButtonAttribute>
            </CreateButton>
        );
    }
}

export default CreateBoardButton;
