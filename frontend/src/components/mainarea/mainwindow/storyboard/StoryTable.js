import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";

const $ = window.jQuery;

class StoryTable extends Component {
    state = {
        storyList: [],
        boardId: ''
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
                boardId: window.sessionStorage.getItem("boardId")
            }
        );
        axios.get('http://localhost:8081/meme/boards/' + this.state.boardId + '/stories?page=0&pageSize=5')
            .then((response) => {
                this.setState({
                    storyList: response.data
                })
            })
            .catch(error => {
                alert(error);
            });
    }

    render() {
        return (
            <div className="row grayed-box-app">
                <table className="table table-hover table-boards">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hidden-xs">Start time</th>
                        <th className="hidden-xs">Finish time</th>
                        <th className="hidden-xs">Votes</th>
                        <th className="hidden-xs">Estimation</th>
                        <th className="create-icon">
                            <i data-toggle="modal" data-target="#createStory" className="createStory fa fa-plus"/> New
                        </th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="text-left">
                    {this.state.storyList.map(story => <tr className="clickable ng-scope">
                        <td className="name-td">{story.description}</td>
                        <td className="hidden-xs">{story.startTime}</td>
                        <td className="hidden-xs">{story.finishTime}</td>
                        <td className="hidden-xs">3 of 3</td>
                        <td className="hidden-xs">{story.estimation}</td>
                        <td className="edit-icon">
                            <i data-toggle="modal" data-target="#editStory" className="editStory fa fa-edit"/></td>
                        <td className="delete-icon">
                            <span data-toggle="modal" data-target="#deleteStory" className="deleteButton"><img
                                className="hover deleteImg"
                                src="https://planitpoker.azureedge.net/Content/delete-icon-hover.png"/></span>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StoryTable;
