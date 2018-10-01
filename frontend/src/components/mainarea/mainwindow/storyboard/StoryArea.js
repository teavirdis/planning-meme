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
import StoryElement from "./StoryElement";
import {BoardAreaDiv} from "../boardarea/style/BoardAreaStyle";

class StoryArea extends Component {

    constructor(props) {
        super(props);

        this.state = {boardName: "", isUserMemberOfBoard: false, stories: []};
        this.becomeMember = this.becomeMember.bind(this);
        this.loadElements = this.loadElements.bind(this);
        this.addChildElement = this.addChildElement.bind(this);
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
                    isUserMemberOfBoard: response.data.some(element => {
                        return element.id === JSON.parse(SignIn.identifyCookieByName("user")).id;
                    })
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    becomeMember() {
        this.setState({
            isUserMemberOfBoard: true
        })
    }

    addChildElement(story) {
        const stories = this.state.stories;

        this.setState(() => ({
            stories: stories.concat(
                <StoryElement
                    key={story.id}
                    id={story.id}
                    description={story.description}
                    startTime={story.startTime}
                    finishTime={story.finishTime}
                    estimation={story.estimation}
                    {...this.props} />
            )
        }));
    }

    loadElements(elements) {
        this.setState(() => ({
            stories: elements
        }));
    }

    render() {
        return (
            <AreaContainer id="storyArea">
                <AreaColumns>
                    <AreaTitle>{this.state.boardName}</AreaTitle>
                    <AreaRow>
                        <Route path={`${this.props.match.url}/:storyId`}
                               render={(props) => <JoinOrVoteView isUserMemberOfBoard={this.state.isUserMemberOfBoard}
                                                                  becomeMember={this.becomeMember}
                                                                  {...props} />}/>
                        <div className="row">
                            <div className="col-md-9">
                                <CreateStory onStoryAdd={this.addChildElement} {...this.props} />
                                <StoryTable storyList={this.state.stories}
                                            onStoriesLoad={this.loadElements} {...this.props} />
                            </div>
                            <div className="col-md-3 text-center">
                                <ui>
                                    <li>a</li>
                                </ui>
                            </div>
                        </div>
                        <EditStory/>
                        <ConfirmStoryDelete/>
                    </AreaRow>
                </AreaColumns>
                <div className="col-md-1">
                    <div className="starter-template">
                        <div className="login-form">
                            <div className="sc-jzJRlG col-md-8 col-md-offset-2 collapse in enxKql">
                                <form style="margin-top: 10%;">
                                    Hello
                                  </form>
                            </div>
                        </div>
                    </div></div>
            </AreaContainer>
        );
    }
}

export default StoryArea;
