import React, { Component } from 'react';
import './style/style.css'
import {CreateStoryButtonAttribute, CreateButton} from "../style/MainWindowStyle";

class CreateStoryButton extends Component {
    render() {
        return (
            <CreateButton>
                <CreateStoryButtonAttribute>
                    <i className="fa fa-plus"/> Create Story
                </CreateStoryButtonAttribute>
            </CreateButton>
        );
    }
}

export default CreateStoryButton;