import React, {Component} from 'react';
import './css/style.css'
import BoardElement from "./BoardElement";


class BoardTable extends Component {



    render() {
        return (
            <div className="row grayed-box-app">
                <table className="table table-hover table-boards">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hidden-xs">Time</th>
                        <th className="hidden-xs">Last Used</th>
                        <th className="hidden-xs">Stories</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="text-left">
                    <BoardElement/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoardTable;
