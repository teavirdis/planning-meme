import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import {Route} from "react-router-dom";
import JoinOrVoteView from "./JoinOrVoteView";
import {AreaColumns, AreaContainer, AreaRow, AreaTitle, Divider} from "../style/MainWindowStyle";
import axios from "axios";
import StoryElement from "./StoryElement";
import MemeUtil from "../../../../util/MemeUtil";
import {BOARD_URL_REGEX, USER_COOKIE_NAME} from "../../../../util/TextConstant";


class StoryArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boardName: "",
            boardUsers: [],
            isUserMemberOfBoard: false,
            stories: []
        };
        this.becomeMember = this.becomeMember.bind(this);
        this.loadElements = this.loadElements.bind(this);
        this.addChildStoryElement = this.addChildStoryElement.bind(this);
        this.specifyStoryName = this.specifyStoryName.bind(this);
    }

    componentDidMount() {
        this.setState({
            boardName: window.sessionStorage.getItem("boardName")
        });

        axios.get("/meme/users/current-user/boards/" + MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href) + "/members")
            .then((response) => {
                this.setState({
                    isUserMemberOfBoard: response.data.some(element => {
                        return element.id === JSON.parse(MemeUtil.identifyCookieByName(USER_COOKIE_NAME)).id;
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

    addChildStoryElement(story) {
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
            stories: elements.slice()
        }));
    }

    specifyStoryName(storyName) {
        this.setState({
            storyName: storyName
        });
    }

    render() {
        return (
            <AreaContainer id="storyArea">
                <AreaColumns>
                    <AreaTitle>
                        Board: {this.state.boardName}
                    </AreaTitle>
                    <Divider/>
                    <AreaRow>
                        <Route path={`${this.props.match.url}/:storyId`}
                               render={(props) => <JoinOrVoteView isUserMemberOfBoard={this.state.isUserMemberOfBoard}
                                                                  becomeMember={this.becomeMember}
                                                                  storyName={this.state.storyName}
                                                                  {...props} />}/>
                        <div>
                            <CreateStory onStoryAdd={this.addChildStoryElement} {...this.props} />
                            <StoryTable storyList={this.state.stories}
                                        onStoriesLoad={this.loadElements}
                                        specifyStoryName={this.specifyStoryName}
                                        {...this.props} />
                        </div>
                        <EditStory/>
                        <ConfirmStoryDelete/>
                    </AreaRow>
                </AreaColumns>
            </AreaContainer>
        );
    }
}

export default StoryArea;
