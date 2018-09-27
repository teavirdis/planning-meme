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

class BoardArea extends Component {

    constructor(props) {
        super(props);

        this.state = { boards: [] };
        this.addChildElement = this.addChildElement.bind(this);
        this.loadElements = this.loadElements.bind(this);
    }

    addChildElement(item) {
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
                    <AreaColumns>
                        <AreaTitle>Recent Boards</AreaTitle>
                        <CreateBoardButton/>
                        <BoardTable onLoad={ this.loadElements } boardList={ this.state.boards } {...this.props} />
                        <EditBoard/>
                        <CreateBoard onAdd={ this.addChildElement }/>
                        <ConfirmDelete/>
                    </AreaColumns>
                </BoardAreaDiv>
            </AreaContainer>
        );
    }
}

export default BoardArea;
