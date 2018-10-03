import React, {Component} from "react";
import PlayArea from "./playarea/PlayArea";
import JoinBoardButton from "./JoinBoardButton";
import { AreaTitle, Divider } from "../style/MainWindowStyle";

class JoinOrVoteView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AreaTitle>Story: { this.props.storyName }</AreaTitle>
                <Divider/>
                {
                    this.props.isUserMemberOfBoard
                    ? <PlayArea />
                    : <JoinBoardButton {...this.props} />
                }
            </div>
        );
    }
}

export default JoinOrVoteView;