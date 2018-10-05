import React, {Component} from 'react';
import axios from "axios";

import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";
import MemeUtil from "../../util/MemeUtil";
import {USER_COOKIE_NAME} from "../../util/TextConstant";

class CreateBoard extends Component {
    state = {
        name: ''
    };

    addValue = (e) => {
        e.preventDefault();
        let boardName = (this.state.name.length > 0 && this.state.name.length < 50)
            ? this.state.name
            : this.state.name.substr(0, 49);

        let newBoard = {
            name: boardName,
            startTime: MemeUtil.IsoDateString(new Date()), //TODO Should be done on server
            admin: {id: JSON.parse(MemeUtil.identifyCookieByName(USER_COOKIE_NAME)).id} //TODO
        };
        axios.post('/meme/users/current-user/boards/', newBoard)
            .then((response) => {
                this.props.onAdd();
                this.setState({
                    name: ""
                })
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
                            <ModalInput placeholder="Enter board name"
                                        required="required"
                                        onChange={ this.onInputChange }
                                        value={ this.state.name } />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.addValue}>Create</Button>
                            <CloseButton>Close</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default CreateBoard;
