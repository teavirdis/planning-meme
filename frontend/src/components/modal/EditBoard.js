import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";


class EditBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {name: ""};
    }

    editBoard() {
        axios.put('/meme/users/current-user/boards/' + sessionStorage.getItem("idOfBoardToEdit"), {
            name: this.state.name
        })
            .then((response) => {
                console.log(response);
                sessionStorage.removeItem("idOfBoardToEdit");
                this.setState({
                    name: ""
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    onInputChange = (e) => this.setState({
        name: e.target.value
    });

    render() {
        return (
            <ModalDialogDiv id="editBoard">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <SmallCloseButton>&times;</SmallCloseButton>
                            <ModalTitle>Update Board</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <ModalInput placeholder="Enter board name" onChange={this.onInputChange}
                                        required="required" value={this.state.name}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => this.editBoard(e)}>Edit</Button>
                            <CloseButton>Close</CloseButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default EditBoard;
