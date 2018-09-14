import React, {Component} from 'react';
import CreateBoardButton from "./CreateBoardButton";
import BoardTable from "./BoardTable";
import './css/style.css'
import EditBoard from "../../../modal/EditBoard";
import ConfirmDelete from "../../../modal/ConfirmDelete";
import CreateBoard from "../../../modal/CreateBoard";

class BoardArea extends Component {
    render() {
        return (
            <div id="boardArea">
                <div className="col-md-12 col-md-12 text-left no-top-padding">
                    <div className="title">Recent Boards</div>
                    <CreateBoardButton/>
                    <BoardTable/>
                    <EditBoard/>
                    <CreateBoard/>
                    <ConfirmDelete/>
                </div>
            </div>
        );
    }
}

export default BoardArea;
