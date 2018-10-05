import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";

class EditStory extends Component {

    state = {
        description: ''
    };

    editValue = (e) => {
        e.preventDefault();
        axios.put(
            '/meme/users/current-user/boards/'
            + sessionStorage.getItem('boardId')
            + '/stories/'
            + sessionStorage.getItem('storyId'), {
                description: this.state.description
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        return false;
    };

    onInputChange = (e) => this.setState({
        description: e.target.value
    });

    render() {
        return (
            <ModalDialogDiv id="editStory">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <SmallCloseButton>&times;</SmallCloseButton>
                            <ModalTitle>Edit Story</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <ModalInput placeholder={} onChange={this.onInputChange}
                                        required=""/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.editValue}>Edit</Button>
                             <CloseButton>Close</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default EditStory;
