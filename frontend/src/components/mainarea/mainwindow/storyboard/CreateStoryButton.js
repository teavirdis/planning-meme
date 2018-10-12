import React, { Component } from 'react';
import './style/style.css'
import {CreateStoryButtonAttribute, CreateButton} from "../style/MainWindowStyle";
import MemeUtil from "../../../../util/MemeUtil";
import $ from "jquery"

class CreateStoryButton extends Component {
    render() {
        return (
            <CreateButton>
                <CreateStoryButtonAttribute onClick={(e) => MemeUtil.focusBoardNameInput("#createStoryInputText")}>
                    <i className="fa fa-plus"/> Create Story
                </CreateStoryButtonAttribute>
            </CreateButton>
        );
    }
}

export default CreateStoryButton;