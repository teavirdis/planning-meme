import React, {Component} from 'react';
import axios from "axios";

class EditStory extends Component {
    state = {
        description: ''
    };

    editValue = (e) => {
        e.preventDefault();
        axios.put('/meme/boards/'+sessionStorage.getItem('boardId')+'/stories/'+sessionStorage.getItem('storyId'), {
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
            <div id="editStory" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title">
                                Edit Story
                            </h4>
                        </div>
                        <div className="modal-body">
                          <textarea name="inputName"
                                    className="form-control"
                                    rows="6"
                                    placeholder="Put your stories text here."
                                    onChange={ this.onInputChange }
                                    required=""/>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={this.editValue}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStory;
