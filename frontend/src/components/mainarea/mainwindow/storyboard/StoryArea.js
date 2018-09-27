import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import {Route} from "react-router-dom";
import JoinOrVoteView from "./JoinOrVoteView";
import {AreaColumns, AreaContainer, AreaRow, AreaTitle} from "../style/MainWindowStyle";


class StoryArea extends Component {

    constructor(props) {
        super(props);

        this.state = { boardName: "", isUserMemberOfBoard: false };
    }

    componentDidMount() {
        this.setState({
            boardName: window.sessionStorage.getItem("boardName")
        });
        //TODO set boolean property
    }

    render() {
        return (
            <AreaContainer id="storyArea">
                <AreaColumns>
                    <AreaTitle>{ this.state.boardName }</AreaTitle>
                    <AreaRow>
                        <Route path={`${this.props.match.url}/:storyId`}
                               render={(props) => <JoinOrVoteView isUserMemberOfBoard={ this.state.isUserMemberOfBoard }
                                                                  {...props} /> } />
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
