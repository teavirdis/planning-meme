import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, divStyle, ModalBody, ModalContent,
    ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader
} from "./style/ModalStyle";

class ConfirmDelete extends Component {

    deleteBoard() {
        axios.delete('/meme/users/current-user/boards/' + sessionStorage.getItem("idOfBoardToDelete"))
            .then((response) => {
                console.log(response);
                sessionStorage.removeItem("idOfBoardToDelete");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <ModalDialogDiv id="confirm-delete">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader style={divStyle}>Wait!</ModalHeader>
                        <ModalBody>Are you sure to delete this?</ModalBody>
                        <ModalFooter>
                            <Button>Cancel</Button>
                            <CloseButton onClick={(e) => this.deleteBoard(e)}>Delete anyway</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default ConfirmDelete;
