import React, { Component } from 'react';
import {ButtonAttribute, CreateButton} from "../../style/MainWindowStyle";

class StartButton extends Component {
    render() {
        return (
            <CreateButton>
                <ButtonAttribute>
                    Start
                </ButtonAttribute>
            </CreateButton>
        );
    }
}

export default StartButton;
