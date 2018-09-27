import React, {Component} from 'react';
import axios from "axios";
import CreateStory from "./CreateStory";
import SignIn from "../mainarea/signin/SignIn";

import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";

class CreateBoard extends Component {
    state = {
        name: ''
    };

    addValue = (e) => {
        e.preventDefault();
        let boardName = (this.state.name.length > 0 && this.state.name.length < 50) ?
            this.state.name :
            this.state.name.substr(0, 49);

        let newBoard = {
            name: boardName,
            startTime: CreateStory.IsoDateString(new Date()), //TODO Should be done on server
            admin: {id: JSON.parse(SignIn.identifyCookieByName('user')).id}
        };
        axios.post('/meme/users/current-user/boards/', newBoard)
            .then((response) => {
                console.log(response);
                this.props.onAdd(newBoard);
            })
            .catch((error) => {
                console.log(error);
            });
        return false;
    };

    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return (
            <ModalDialogDiv id="createBoard">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <SmallCloseButton>&times;</SmallCloseButton>
                            <ModalTitle>Create New Board</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <ModalInput placeholder="Enter board name" required="required"
                                        onChange={this.onInputChange}/>
                        </ModalBody>
                        <ModalFooter>
                            <CloseButton>Close</CloseButton>
                            <Button onClick={this.addValue}>Create</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default CreateBoard;
