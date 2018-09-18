import React, {Component} from 'react';
import './css/style.css'


const $ = window.jQuery;

class BoardElement extends Component{

    goFromBoardToStory(){
        $('#storyArea').show();
        $('#boardArea').hide();
        window.sessionStorage.setItem('boardName', this.props.name);
        window.sessionStorage.setItem('boardId', this.props.id);
    }

    render() {
        return (
            <tr className="clickable ng-scope">
                <td className="name-td" onClick={(e) => this.goFromBoardToStory(e)}>
                    <div>{this.props.name}</div>
                </td>
                <td className="hidden-xs" onClick={(e) => this.goFromBoardToStory(e)}>
                    <div>In: <span className="ng-binding ng-scope">{String(this.props.startTime).replace('T', ' / ')}</span></div>
                </td>
                <td className="hidden-xs" onClick={(e) => this.goFromBoardToStory(e)}>
                    <div className="of ng-binding ng-scope">{this.props.storiesCount}</div>
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