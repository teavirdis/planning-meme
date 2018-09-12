import React, { Component } from 'react';
import './css/style.css'
import axios from "axios";

class CreateBoard extends Component {
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        axios.post('http://localhost:8080/meme/boards/', "board")
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
            <div id="createBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Create New Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Enter board name" required="required"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoard;
