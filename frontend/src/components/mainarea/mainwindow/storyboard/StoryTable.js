import React, {Component} from 'react';
import axios from "axios";
import StoryElement from "./StoryElement";
import {Table, TableRow} from "../style/MainWindowStyle";
import {StoryTableThStyle, StoryTableThStyleHidden, StoryTableThStyleModal} from "./style/StoryAreaStyle";

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
                        <StoryTableThStyle>Title</StoryTableThStyle>
                        <StoryTableThStyleHidden>Start time</StoryTableThStyleHidden>
                        <StoryTableThStyleHidden>Finish time</StoryTableThStyleHidden>
                        <StoryTableThStyleHidden>Votes</StoryTableThStyleHidden>
                        <StoryTableThStyleHidden>Estimation</StoryTableThStyleHidden>
                        <StoryTableThStyleModal>
                            <div className="create-story"><i className="createStory fa fa-plus"/> New</div>
                        </StoryTableThStyleModal>
                        <StoryTableThStyle/>
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
