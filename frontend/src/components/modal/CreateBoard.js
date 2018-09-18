import React, { Component } from 'react';
import './css/style.css'
import axios from "axios";

class CreateBoard extends Component {
    state = {
        name: ''
    };

    addValue = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8081/meme/boards/', {
        //     name: this.state.value,
        //     startTime: '2018-09-18T08:32:17.179',
        //     admin: localStorage.getItem('user')
        // })
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) =>{
        //         console.log(error);
        //     });
        return false;
    }

    onInputChange = (e) => this.setState({
        name: e.target.value
    });

    render() {
        return (
            <div id="createBoard" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Create New Board</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Enter board name" required="required" onChange={this.onInputChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button className="btn btn-primary" onClick={this.addValue} data-dismiss="modal">Create</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoard;
