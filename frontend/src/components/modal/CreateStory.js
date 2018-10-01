import React, {Component} from 'react';
import axios from "axios";
import {
    Button, CloseButton, ModalBody, ModalContent, ModalDialog, ModalDialogDiv, ModalFooter, ModalHeader, ModalInput,
    ModalTitle, SmallCloseButton
} from "./style/ModalStyle";

class CreateStory extends Component {
    state = {};

    static IsoDateString(date) {
        function pad(n) {
            return n < 10 ? "0" + n : n
        }

        return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T"
            + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds())
    }

    addValue = (e) => {
        e.preventDefault();
        let newStory = {
            description: this.state.description,
            startTime: CreateStory.IsoDateString(new Date())
        }
        axios.post('/meme/users/current-user/boards/' + this.props.match.params.boardId + '/stories', newStory)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.headers.location);
                axios.get(res.headers.location)
                    .then(result => {
                        this.props.onStoryAdd(result.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                //this.props.onStoryAdd(newStory);
                this.setState({
                    description: ""
                })
            })
            .catch(err => {
                console.log(err);
                console.log(err.data);
            });
        return false;
    };

    onInputChange = (e) => this.setState({
        description: e.target.value
    });

    render() {
        return (
            <ModalDialogDiv id="createStory">
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <SmallCloseButton>&times;</SmallCloseButton>
                            <ModalTitle>Create New Story</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <ModalInput placeholder="Put your stories text here."
                                        onChange={ this.onInputChange }
                                        required=""
                                        value={ this.state.description }/>
                        </ModalBody>
                        <ModalFooter>
                            <CloseButton>Close</CloseButton>
                            <Button onClick={ this.addValue }>
                                Create
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalDialogDiv>
        );
    }
}

export default CreateStory;
