import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import {Route} from "react-router-dom";
import JoinOrVoteView from "./JoinOrVoteView";
import {AreaColumns, AreaContainer, AreaRow, AreaTitle} from "../style/MainWindowStyle";
import axios from "axios";
import SignIn from "../../signin/SignIn";

class StoryArea extends Component {

    constructor(props) {
        super(props);

        this.state = { boardName: "", isUserMemberOfBoard: false };
    }

    componentDidMount() {
        this.setState({
            boardName: window.sessionStorage.getItem("boardName")
        });

        let currentUrl = window.location.href;
        let regex = /boards\/([\d]+)\/stories/g;
        let foundBoardId = regex.exec(currentUrl)[1];
        console.log(foundBoardId);

        axios.get("/meme/users/current-user/boards/" + foundBoardId + "/members")
            .then((response) => {
                this.setState({
                    isUserMemberOfBoard: response.data.some( element => {
                        return element.id == JSON.parse(SignIn.identifyCookieByName("user")).id;
                    })
                })
            })
            .catch((error) =>{
                console.log(error);
            });
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
