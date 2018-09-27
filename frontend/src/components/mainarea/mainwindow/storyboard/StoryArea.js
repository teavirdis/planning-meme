import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import {AreaColumns, AreaContainer, AreaRow, AreaTitle} from "../style/MainWindowStyle";
import PlayArea from "./votearea/PlayArea";


class StoryArea extends Component {

    state = {
        boardName: ''
    };

    componentDidMount() {
        this.setState({
            boardName: window.sessionStorage.getItem('boardName')
        });
    }

    render() {
        return (
            <AreaContainer id="storyArea">
                <AreaColumns>
                    <AreaTitle>{ this.state.boardName }</AreaTitle>
                    <AreaRow>
                        <StoryTable {...this.props} />
                        <EditStory/>
                        <ConfirmStoryDelete/>
                        <CreateStory {...this.props} />
                    </AreaRow>
                </AreaColumns>
            </AreaContainer>
        );
    }
}

export default StoryArea;
