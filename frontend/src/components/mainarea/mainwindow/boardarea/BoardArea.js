import React, {Component} from 'react';
import CreateBoardButton from "./CreateBoardButton";
import BoardTable from "./BoardTable";
import './style/style.css'
import EditBoard from "../../../modal/EditBoard";
import ConfirmDelete from "../../../modal/ConfirmDelete";
import CreateBoard from "../../../modal/CreateBoard";
import BoardElement from "./BoardElement";
import {BoardAreaDiv} from "./style/BoardAreaStyle";
import {AreaContainer, AreaTitle, BoardAreaColumns} from "../style/MainWindowStyle";

class BoardArea extends Component {

    constructor(props) {
        super(props);

        this.state = {boards: []};
        this.addChildBoardElement = this.addChildBoardElement.bind(this);
        this.loadElements = this.loadElements.bind(this);
    }

    addChildBoardElement(item) {
        const boards = this.state.boards;

        this.setState(() => ({
            boards: boards.concat(
                <BoardElement
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    startTime={item.startTime}
                    storiesCount={item.storiesCount} {...this.props} />)
        }));
    }

    loadElements(elements) {
        this.setState(() => ({
            boards: elements
        }));
    }

    render() {
        return (
            <AreaContainer>
                <BoardAreaDiv>
                    <BoardAreaColumns>
                        <AreaTitle>Recent Boards</AreaTitle>
                        <CreateBoardButton/>
                        <BoardTable onLoad={this.loadElements} boardList={this.state.boards} {...this.props} />
                        <EditBoard/>
                        <CreateBoard onAdd={this.addChildBoardElement}/>
                        <ConfirmDelete/>
                    </BoardAreaColumns>
                </BoardAreaDiv>
            </AreaContainer>
        );
    }
}

export default BoardArea;
