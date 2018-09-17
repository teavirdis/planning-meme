import React, { Component } from 'react';
import './css/style.css'
import axios from "axios";

class CreateBoard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {value: ''};
        this.addValue = this.addValue.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    addValue(evt)
    {
        evt.preventDefault();
        alert(this.state.value);
        axios.post('/meme/boards/', {
            name: this.state.value,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        return false;
    }
    updateInput(evt){
        this.state={value: evt.target.value};
    }
    render() {
        return (
            <div id="createBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={this.addValue}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Create New Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Enter board name" onChange={ this.updateInput } required="required"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-dismiss="modal">Create</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoard;
