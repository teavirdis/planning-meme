import React, {Component} from "react";
import axios from "axios";

class JoinBoardButton extends Component {
    constructor(props) {
        super(props);

        this.joinBoard = this.joinBoard.bind(this);
    }

    joinBoard() {
        let currentUrl = window.location.href;
        let regex = /boards\/([\d]+)\/stories/g;
        let foundBoardId = regex.exec(currentUrl)[1];
        console.log(foundBoardId);

        axios.post("/meme/users/current-user/boards/" + foundBoardId + "/members")
            .then((response) => {
                console.log(response);
                //TODO create and call this.props.onMemberAdd()
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    render() {
        return (
            <div className="no-left-padding">
                <a className="btn btn-primary pull-left fa btn btn-default" onClick={ this.joinBoard }>
                    <i className="fa fa-plus"/> Join board
                </a>
            </div>
        );
    }
}

export default JoinBoardButton;