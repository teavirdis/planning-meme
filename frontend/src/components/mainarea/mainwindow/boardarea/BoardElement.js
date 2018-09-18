import React, {Component} from 'react';
import './css/style.css'


const $ = window.jQuery;

function goFromBoardToStory(){
    $('#storyArea').show();
    $('#boardArea').hide();
}

class BoardElement extends Component{
    render() {
        return (
            <tr className="clickable ng-scope">
                <td className="name-td" onClick={goFromBoardToStory}>
                    <div></div>
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
        );
    }
}

export default BoardElement;