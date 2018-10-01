import {AreaRow} from "../../style/MainWindowStyle";
import React, {Component} from "react";
import axios from "axios";
import MemberElement from "./MemberElement";

const styleUserList = {
    marginTop: '60px'
};

class MemberList extends Component {
    constructor(props) {
        super(props);

        this.state = {boardUsers: []};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 2000);
    }

    tick() {
        let currentUrl = window.location.href;
        let regex = /boards\/([\d]+)\/stories/g;
        let foundBoardId = regex.exec(currentUrl)[1];

        axios.get("/meme/users/current-user/boards/" + foundBoardId + "/members")
            .then((response) => {
                this.setState({
                    boardUsers: response.data.map(item =>
                        <MemberElement key={item.id}
                                       id={item.id}
                                       name={item.username}/>)
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
        <div className="col-md-2 col-md-offset-1 text-center" style={styleUserList}>
            Member List
            <ul className="list-group">
                {this.state.boardUsers}
            </ul>
        </div>
        );
    }
}

export default MemberList;