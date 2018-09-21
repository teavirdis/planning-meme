import React, {Component} from 'react';
import axios from "axios";

const $ = window.jQuery;

class EditBoard extends Component {

    state = {
        name: ''
    };

    editBoard() {
        axios.put('/meme/users/current-user/boards/' + $('#boardToEdit').val(), {
            name: this.state.name
            })
            .then((response) => {
                console.log(response);
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
            <div id="editBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title">Update Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter board name"
                                   onChange={ this.onInputChange }
                                   required="required" />
                        </div>
                        <div className="modal-footer">
                            <input id="boardToEdit" type="hidden"/>
                            <button type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal">
                                Close
                            </button>
                            <button onClick={ (e) => this.editBoard(e) }
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditBoard;
