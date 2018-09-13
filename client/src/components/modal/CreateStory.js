import React, {Component} from 'react';
import axios from 'axios';
import './css/style.css'

class CreateStory extends Component {
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        axios.post('http://localhost:8081/meme/boards/1/stories/', "story")
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log(err.data);
            });
        return false;
    }

    render() {
        return (
            <div id="createStory" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Create New Story</h4>
                        </div>
                        <div className="modal-body">
                            <textarea name="inputName" className="form-control" rows="6"
                                      placeholder="Put your stories text here." required=""/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleClick} data-dismiss="modal">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStory;
