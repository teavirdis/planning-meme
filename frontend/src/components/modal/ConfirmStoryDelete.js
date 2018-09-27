import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, divStyle, ModalBody, ModalContent,
    ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader
} from "./style/ModalStyle";

class ConfirmStoryDelete extends Component {

    handleClick = (e) => {
        e.preventDefault();
        axios.delete(
            '/meme/users/current-user/boards/'
            + sessionStorage.getItem('boardId')
            + '/stories/'
            + sessionStorage.getItem('storyId')
        )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        return false;
    };

    render() {
        return (
            <ModalDialogDiv id="deleteStory">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader style={divStyle}>Wait!</ModalHeader>
                        <ModalBody>Are you sure to delete story?</ModalBody>
                        <ModalFooter>
                            <Button>Cancel</Button>
                            <CloseButton onClick={this.handleClick}>Delete anyway</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default ConfirmStoryDelete;
