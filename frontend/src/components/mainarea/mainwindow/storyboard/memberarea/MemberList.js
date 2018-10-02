import React, {Component} from "react";
import axios from "axios";
import MemberElement from "./MemberElement";
import MemeUtil from "../../../../../util/MemeUtil";
import {BOARD_URL_REGEX} from "../../../../../util/TextConstant";
import $ from 'jquery';

const styleUserList = {
    marginTop: '60px',
    paddingBottom: '20px',
    paddingTop: '50px'
};

class MemberList extends Component {
    constructor(props) {
        super(props);

        this.state = {boardUsers: []};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 500);
    }

    tick() {
        axios.get("/meme/users/current-user/boards/" + MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href) + "/members")
            .then((response) => {
                $('.spinner').remove();
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
            <div className="text-center" style={styleUserList}>
                Member List
                <div className="spinner circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className="list-group">
                    {this.state.boardUsers}
                </ul>
            </div>
        );
    }
}

export default MemberList;