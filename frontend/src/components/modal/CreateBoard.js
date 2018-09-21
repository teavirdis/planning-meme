import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";
import CreateStory from "./CreateStory";
import SignIn from "../mainarea/signin/SignIn";

class CreateBoard extends Component {
    state = {
        name: ''
    };

    addValue = (e) => {
        e.preventDefault();
        axios.post('/meme/boards/', {
            name: this.state.name,
            startTime: CreateStory.IsoDateString(new Date()), //TODO Should be done on server
            admin: { id: SignIn.getCookie('userId') }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            });
        return false;
    };

    onInputChange = (e) => this.setState({
        name: e.target.value
    });

    render() {
        return (
            <div id="createBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                        <div className="modal-header">
                            <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title">Create New Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter board name"
                                   required="required"
                                   onChange={ this.onInputChange }/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-primary"
                                    onClick={ this.addValue }
                                    data-dismiss="modal">
                                Create
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoard;
