import React, {Component} from 'react';
import CreateBoardButton from "./CreateBoardButton";
import BoardTable from "./BoardTable";
import './style/style.css'
import EditBoard from "../../../modal/EditBoard";
import ConfirmDelete from "../../../modal/ConfirmDelete";
import CreateBoard from "../../../modal/CreateBoard";
import BoardElement from "./BoardElement";
import {BoardAreaDiv} from "./style/BoardAreaStyle";
import {AreaColumns, AreaContainer, AreaTitle} from "../style/MainWindowStyle";
import axios from "axios";

class BoardArea extends Component {

    constructor(props) {
        super(props);

        this.state = { boards: [], pageNumber : 0, pageSize : 5, boardCount: 25 };
        this.reloadPage = this.reloadPage.bind(this);
        this.loadElements = this.loadElements.bind(this);
        this.onInputPageNumberChange = this.onInputPageNumberChange.bind(this);
        this.checkBoardCount = this.checkBoardCount.bind(this);
    }

    componentDidMount() {
        this.loadBoards(this.state.pageNumber);
    }

    checkBoardCount() {
        axios.get('/meme/users/current-user/')
            .then((response) => {
                this.setState({
                    boardCount: response.data.countOfBoards
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    onInputPageNumberChange(e) {
        let newPageNumber = Number(e.target.text) - 1;
        this.setState({
            pageNumber: newPageNumber
        });
        this.loadBoards(newPageNumber);
    }

    loadBoards(pageNumber) {
        this.checkBoardCount();
        axios.get(
            "/meme/users/current-user/boards?page="
            + pageNumber
            + "&pageSize="
            + this.state.pageSize )
            .then((response) => {
                let boardElements = response.data.map(item =>
                    <BoardElement
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        startTime={item.startTime}
                        storiesCount={item.storiesCount} {...this.props} />
                );
                this.loadElements(boardElements);
            })
            .catch(error => {
                console.log(error);
            });
    }

    reloadPage() {
        this.loadBoards(this.state.pageNumber);
    }

    loadElements(elements) {
        this.setState({
            boards: elements.slice()
        });
    }

    render() {
        return (
            <AreaContainer>
                <BoardAreaDiv>
                    <AreaColumns>
                        <AreaTitle>Recent Boards</AreaTitle>
                        <CreateBoardButton/>
                        <BoardTable boardList={this.state.boards}
                                    onInputPageNumberChange={this.onInputPageNumberChange}
                                    pageSize={this.state.pageSize}
                                    boardCount={this.state.boardCount} {...this.props} />
                        <EditBoard/>
                        <CreateBoard onAdd={ this.reloadPage }/>
                        <ConfirmDelete/>
                    </AreaColumns>
                </BoardAreaDiv>
            </AreaContainer>
        );
    }
}

export default BoardArea;
