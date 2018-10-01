import React, {Component} from 'react';
import CreateBoardButton from "./CreateBoardButton";
import BoardTable from "./BoardTable";
import './css/style.css'
import EditBoard from "../../../modal/EditBoard";
import ConfirmDelete from "../../../modal/ConfirmDelete";
import CreateBoard from "../../../modal/CreateBoard";
import BoardElement from "./BoardElement";
import BoardUsers from "./BoardUsers";

class BoardArea extends Component {

    constructor(props) {
        super(props);

        this.state = {boards: []};
        this.addChildElement = this.addChildElement.bind(this);
        this.loadElements = this.loadElements.bind(this);
    }

    addChildElement(item) {
        const boards = this.state.boards;

        this.setState(state => ({
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
        this.setState(state => ({
            boards: elements
        }));
    }

    render() {
        return (
            <div className="container">
                <div id="boardArea">
                    <div className="col-md-8 col-md-8 text-left no-top-padding">
                        <div className="title">Recent Boards</div>
                        <CreateBoardButton/>
                        <BoardTable onLoad={this.loadElements}
                                    boardList={this.state.boards} {...this.props} />
                        <EditBoard/>
                        <CreateBoard onAdd={this.addChildElement}/>
                        <ConfirmDelete/>
                    </div>
                    <div className={co}>
                        <CreateBoardButton/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardArea;
