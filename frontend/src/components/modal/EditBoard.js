import React, { Component } from 'react';
import './css/style.css'

class EditBoard extends Component {
    render() {
        return (
            <div id="editBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Update Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Enter board name" required="required" value="Chosen board name"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditBoard;
