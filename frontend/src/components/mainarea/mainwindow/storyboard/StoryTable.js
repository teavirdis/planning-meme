import React, {Component} from 'react';
import axios from "axios";
import StoryElement from "./StoryElement";
import {Table, TableRow, TableThStyle, TableThStyleHidden, TableThStyleModal} from "../style/MainWindowStyle";

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
        if (this.state.boardId != null) {
            axios.get('/meme/users/current-user/boards/' + this.state.boardId + '/stories?page=0&pageSize=5')
                .then((response) => {
                    this.setState({
                        storyList: response.data.map(story => <StoryElement
                            key={story.id}
                            id={story.id}
                            description={story.description}
                            startTime={story.startTime}
                            finishTime={story.finishTime}
                            estimation={story.estimation}
                            {...this.props} />)
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
                        <TableThStyle>Title</TableThStyle>
                        <TableThStyleHidden>Start time</TableThStyleHidden>
                        <TableThStyleHidden>Finish time</TableThStyleHidden>
                        <TableThStyleHidden>Votes</TableThStyleHidden>
                        <TableThStyleHidden>Estimation</TableThStyleHidden>
                        <TableThStyleModal>
                            <div className="create-story"><i className="createStory fa fa-plus"/> New</div>
                        </TableThStyleModal>
                        <TableThStyle/>
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
