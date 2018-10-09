import React, {Component} from 'react';
import axios from "axios";
import {
    Button,
    CloseButton,
    divStyle,
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalDialogDiv,
    ModalFooter,
    ModalHeader
} from "./style/ModalStyle";

class ConfirmStoryDelete extends Component {

    deleteStory() {
        axios.delete('/meme/users/current-user/boards/' + this.props.boardId
            + '/stories/' + this.props.storyIdToDelete)
            .then(() => {
                this.props.onReloadPage();
            })
            .catch((error) => {
                console.log(error.data);
            });
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
                            <CloseButton onClick={(e) => this.deleteStory(e)}>Delete anyway</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default ConfirmStoryDelete;
