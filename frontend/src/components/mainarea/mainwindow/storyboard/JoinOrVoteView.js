import React, {Component} from "react";
import PlayArea from "./votearea/PlayArea";
import JoinBoardButton from "./JoinBoardButton";

class JoinOrVoteView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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