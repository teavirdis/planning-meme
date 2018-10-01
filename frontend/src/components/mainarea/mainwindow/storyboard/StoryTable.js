import React, {Component} from 'react';
import axios from "axios";
import StoryElement from "./StoryElement";
import {Table, TableRow, TableThStyle, TableThStyleHidden, TableThStyleModal} from "../style/MainWindowStyle";

class StoryTable extends Component {

    constructor(props) {
        super(props);
        this.tick();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        console.log(this.props.match.params.boardId);
        console.log(this.props.match.params);
        if (this.props.match.params.boardId != null) {
            axios.get('/meme/users/current-user/boards/' + this.props.match.params.boardId + '/stories?page=0&pageSize=5')
                .then((response) => {
                    this.props.onStoriesLoad(response.data.map(story =>
                        <StoryElement
                            key={story.id}
                            id={story.id}
                            description={story.description}
                            startTime={story.startTime}
                            finishTime={story.finishTime}
                            estimation={story.estimation}
                            {...this.props} />))
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
                        { this.props.storyList }
                    </tbody>
                </Table>
            </TableRow>
        );
    }
}

export default StoryTable;
