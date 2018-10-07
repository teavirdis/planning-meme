import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";

class EditStory extends Component {

    constructor(props) {
        super(props);

        this.state = {description: ""};
    }

    editStory() {
        axios.put('/meme/users/current-user/boards/'+ this.props.boardId
            + '/stories/' + this.props.storyIdToEdit, {
            description: this.state.description
        })
            .then(() => {
                this.props.onReloadPage();
                this.setState({
                    description: ""
                });
            })
            .catch((error) => {
                console.log(error.data);
            });
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
                            <ModalInput placeholder="Put your stories text here." onChange={this.onInputChange}
                                        required=""/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => this.editStory(e)}>Edit</Button>
                            <CloseButton>Close</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default EditStory;