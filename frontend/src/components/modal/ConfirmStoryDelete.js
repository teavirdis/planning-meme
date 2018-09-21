import React, { Component } from 'react';
import axios from "axios";

const divStyle = {
    background: '#920d0d80',
    color: '#5d0707'
};

class ConfirmStoryDelete extends Component {

    handleClick = (e) => {
        e.preventDefault();
        axios.delete('/meme/boards/'+sessionStorage.getItem('boardId')+'/stories/'+sessionStorage.getItem('storyId'))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        return false;
    };

    render() {
        return (
            <div className="modal" id="deleteStory" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content panel-warning">
                        <div className="modal-header" style={divStyle}>Wait!</div>
                        <div className="modal-body">Are you sure to delete story?</div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal">
                                Cancel
                            </button>
                            <a className="btn btn-danger btn-ok"
                               data-dismiss="modal"
                               onClick={this.handleClick}>
                                Delete anyway
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfirmStoryDelete;
