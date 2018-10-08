import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";

class EditBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {name: this.props.boardNameToEdit};
    }

    editBoard() {
        axios.put('/meme/users/current-user/boards/' + this.props.boardIdToEdit, {
            name: this.state.name
        })
            .then(() => {
                this.props.onReloadPage();
                this.setState({
                    name: this.props.boardNameToEdit
                });
            })
            .catch((error) => {
                console.log(error.data);
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
                                        required="required" value={this.props.boardNameToEdit}/>
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