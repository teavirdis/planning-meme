import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import './css/style.css'
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import {Route} from "react-router-dom";
import JoinOrVoteView from "./JoinOrVoteView";

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
            <div id="storyArea" className="container">
                <div className="col-md-12 col-md-12 text-left no-top-padding">
                    <div className="title">{ this.state.boardName }</div>
                    <div className="row">
                        <Route path={`${this.props.match.url}/:storyId`}
                               render={(props) => <JoinOrVoteView isUserMemberOfBoard={ this.state.isUserMemberOfBoard }
                                                                  {...props} /> } />
                        <StoryTable {...this.props} />
                        <EditStory/>
                        <ConfirmStoryDelete/>
                        <CreateStory {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryArea;
