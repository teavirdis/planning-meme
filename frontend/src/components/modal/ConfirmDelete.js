import React, { Component } from 'react';
import './css/style.css'
import axios from "axios";
import CreateStory from "./CreateStory";

const $ = window.jQuery;

const divStyle = {
    background: '#920d0d80',
    color: '#5d0707'
};

class ConfirmDelete extends Component {
    
    deleteBoard(){
        axios.delete('/meme/boards/' + $('#boardToDelete').val())
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            });
    };
    
    render() {
        return (
            <div className="modal" id="confirm-delete" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content panel-warning">
                        <div className="modal-header" style={divStyle}>Wait!</div>
                        <div className="modal-body">Are you sure to delete this?</div>
                        <div className="modal-footer">
                            <input id="boardToDelete" type="hidden"/>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <a onClick={(e) => this.deleteBoard(e)} className="btn btn-danger btn-ok" data-dismiss="modal">Delete anyway</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfirmDelete;
