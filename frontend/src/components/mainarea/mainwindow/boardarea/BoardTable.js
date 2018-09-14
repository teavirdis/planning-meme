import React, {Component} from 'react';
import jQuery from 'jquery'
import './css/style.css'

const $ = window.jQuery;

function goFromBoardToStory(){
    $('#storyArea').show();
    $('#boardArea').hide();
}

class BoardTable extends Component {
    componentDidUpdate() {
        $('.editButton').toggle();
        $('.deleteButton').toggle();
    }
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
                    <tr className="clickable ng-scope">
                        <td className="name-td" onClick={goFromBoardToStory}>
                            <div>vvb</div>
                        </td>
                        <td className="hidden-xs" onClick={goFromBoardToStory}>
                            <div>Total:<span className="ng-binding ng-scope">00:00:00</span></div>
                        </td>
                        <td className="hidden-xs" onClick={goFromBoardToStory}>
                            <div className="ng-binding">Today</div>
                        </td>
                        <td className="hidden-xs" onClick={goFromBoardToStory}>
                            <div className="of ng-binding ng-scope">0 of 0</div>
                        </td>
                        <td className="edit-icon"><i data-toggle="modal" data-target="#editBoard"
                                                     className="editButton fa fa-edit"/>
                        </td>
                        <td className="delete-icon"><span data-toggle="modal" data-target="#confirm-delete"
                                                          className="deleteButton"><img className="hover deleteImg"
                                                                                        src="https://planitpoker.azureedge.net/Content/delete-icon-hover.png"/></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoardTable;
