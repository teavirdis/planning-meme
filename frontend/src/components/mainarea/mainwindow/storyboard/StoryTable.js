import React, {Component} from 'react';
import './style/style.css'
import axios from "axios";
import StoryElement from "./StoryElement";
import {Table, TableRow} from "../style/MainWindowStyle";

const $ = window.jQuery;

class StoryTable extends Component {
    state = {
        storyList: [],
        boardId: ''
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
                boardId: this.props.match.params.boardId
            }
        );
        if (this.state.boardId!=null) {
            axios.get('/meme/users/current-user/boards/' + this.state.boardId + '/stories?page=0&pageSize=5')
                .then((response) => {
                    this.setState({
                        storyList: response.data.map(story => <StoryElement
                            key={story.id}
                            id={story.id}
                            description={story.description}
                            startTime={story.startTime}
                            finishTime={story.finishTime}
                            estimation={story.estimation}/>)
                    })
                })
                .catch(error => {
                    alert(error);
                });
        }
    }

    render() {
        return (
            <TableRow>
                <Table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hidden-xs">Start time</th>
                        <th className="hidden-xs">Finish time</th>
                        <th className="hidden-xs">Votes</th>
                        <th className="hidden-xs">Estimation</th>
                        <th data-toggle="modal" data-target="#createStory">
                            <div className="create-story"><i className="createStory fa fa-plus"/> New</div>
                        </th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="text-left">
                        { this.state.storyList }
                    </tbody>
                </Table>
            </TableRow>
        );
    }
}

export default StoryTable;
