import React, {Component} from 'react';
import './style/style.css';
import {
    BoardEditIAttribute, BoardHiddenSpan, BoardTableBindDiv, BoardTableDeleteIcon, BoardTableDeleteSpan
} from "./style/BoardAreaStyle";
import {
    DeleteIAttribute,
    TableEditIcon,
    TableHiddenXs,
    TableNamedTd,
    TableTrClickableTitle
} from "../style/MainWindowStyle";

class BoardElement extends Component {

    constructor(props) {
        super(props);
        this.goToStory = this.goToStory.bind(this);
    }

    deleteBoard() {
        sessionStorage.setItem("idOfBoardToDelete", this.props.id);
    }

    editBoard() {
        sessionStorage.setItem("idOfBoardToEdit", this.props.id);
    }

    goToStory() {
        this.props.history.push(`${this.props.match.url}/` + this.props.id + `/stories`);
        window.sessionStorage.setItem("boardName", this.props.name);
    }

    render() {
        return (
            <TableTrClickableTitle>
                <TableNamedTd onClick={this.goToStory}>
                    <div>{this.props.name}</div>
                </TableNamedTd>
                <TableHiddenXs onClick={this.goToStory}>
                    <div>
                        In: <BoardHiddenSpan>
                        {String(this.props.startTime).replace('T', ' / ')}
                    </BoardHiddenSpan>
                    </div>
                </TableHiddenXs>
                <TableHiddenXs onClick={this.goToStory}>
                    <BoardTableBindDiv>
                        {this.props.storiesCount}
                    </BoardTableBindDiv>
                </TableHiddenXs>
                <TableEditIcon>
                    <BoardEditIAttribute onClick={(e) => this.editBoard(e)}/>
                </TableEditIcon>
                <BoardTableDeleteIcon>
                    <BoardTableDeleteSpan onClick={(e) => this.deleteBoard(e)}>
                        <DeleteIAttribute/>
                    </BoardTableDeleteSpan>
                </BoardTableDeleteIcon>
            </TableTrClickableTitle>
        );
    }
}

export default BoardElement;