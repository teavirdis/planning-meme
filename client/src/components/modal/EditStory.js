import React, { Component } from 'react';
import './css/style.css'

class EditStory extends Component {
    render() {
        return (
            <div id="editStory" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Edit Story</h4>
                        </div>
                        <div className="modal-body">
                            <textarea name="inputName" className="form-control" rows="6" placeholder="Put your stories text here." value="Put your stories text here." required=""/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStory;
