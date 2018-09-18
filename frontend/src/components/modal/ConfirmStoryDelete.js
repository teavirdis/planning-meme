import React, { Component } from 'react';
import './css/style.css'

const divStyle = {
    background: '#920d0d80',
    color: '#5d0707'
};

class ConfirmStoryDelete extends Component {
    render() {
        return (
            <div className="modal" id="deleteStory" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content panel-warning">
                        <div className="modal-header" style={divStyle}>Wait!</div>
                        <div className="modal-body">Are you sure to delete story?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-danger btn-ok" data-dismiss="modal">Delete anyway</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfirmStoryDelete;
