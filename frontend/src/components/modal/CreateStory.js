import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";

class CreateStory extends Component {
    state = {
    };

    static IsoDateString(date) {
        function pad ( n ) {
            return n < 10 ? "0" + n : n
        }

        return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T"
            + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds())
    }

    addValue = (e) => {
        e.preventDefault();
        axios.post('/meme/boards/'+sessionStorage.getItem('boardId')+'/stories',
            {
                description: this.state.description,
                startTime: CreateStory.IsoDateString(new Date())
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log(err.data);
            });
        return false;
    };

    onInputChange = (e) => this.setState({
        description: e.target.value
    });

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
                                      placeholder="Put your stories text here." onChange={this.onInputChange} required=""/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addValue} data-dismiss="modal">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStory;
