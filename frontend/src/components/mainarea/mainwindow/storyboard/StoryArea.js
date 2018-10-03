import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";
import { Route } from "react-router-dom";
import PlayAreaWrapper from "./PlayAreaWrapper";
import {AreaColumns, AreaContainer, AreaRow, AreaTitle, Divider} from "../style/MainWindowStyle";
import axios from "axios";
import StoryElement from "./StoryElement";
import MemeUtil from "../../../../util/MemeUtil";
import {BOARD_URL_REGEX, USER_COOKIE_NAME} from "../../../../util/TextConstant";
import JoinBoardButton from "./JoinBoardButton";


class StoryArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            boardName: "",
            boardUsers: [],
            isUserMemberOfBoard: undefined,
            stories: []
        };
        this.becomeMember = this.becomeMember.bind(this);
        this.loadElements = this.loadElements.bind(this);
        this.addChildStoryElement = this.addChildStoryElement.bind(this);
        this.specifyStoryName = this.specifyStoryName.bind(this);
        this.loadBoardName = this.loadBoardName.bind(this);
        this.checkUserMembership = this.checkUserMembership.bind(this);
    }

    componentDidMount() {
        let boardId = MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href);
        this.loadBoardName(boardId);
        this.checkUserMembership(boardId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location !== this.props.location) {
            let boardId = MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href);
            this.loadBoardName(boardId);
        }
    }

    loadBoardName(boardId) {
        axios.get("/meme/users/current-user/boards/" + boardId)
            .then((response) => {
                this.setState({
                    boardName: response.data.name
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    checkUserMembership(boardId) {
        axios.get("/meme/users/current-user/boards/" + boardId + "/members")
            .then((response) => {
                this.setState({
                    isUserMemberOfBoard: response.data.some((element) => {
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
                    {this.state.isUserMemberOfBoard == false && <JoinBoardButton becomeMember={this.state.becomeMember}/>}
                    <AreaRow>
                        <Route path={`${this.props.match.url}/:storyId`}
                               render={(props) =>
                                   <PlayAreaWrapper isUserMemberOfBoard={this.state.isUserMemberOfBoard}
                                                    storyName={this.state.storyName}
                                                    {...props}/>}/>
                        <div>
                            <CreateStory onStoryAdd={this.addChildStoryElement} {...this.props}/>
                            <StoryTable storyList={this.state.stories}
                                        onStoriesLoad={this.loadElements}
                                        specifyStoryName={this.specifyStoryName}
                                        {...this.props}/>
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
