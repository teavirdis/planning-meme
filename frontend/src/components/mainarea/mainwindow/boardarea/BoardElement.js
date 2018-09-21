import React, {Component} from 'react';
import './css/style.css';
import { Link, Route } from "react-router-dom";


const $ = window.jQuery;

class BoardElement extends Component{

    // goFromBoardToStory(){
    //     $('#storyArea').show();
    //     $('#boardArea').hide();
    //     window.sessionStorage.setItem('boardName', this.props.name);
    //     window.sessionStorage.setItem('boardId', this.props.id);
    // }

    constructor(props) {
        super(props)

        this.goToStory = this.goToStory.bind(this);
    }

    deleteBoard(){
        $('#boardToDelete').val(this.props.id);
    }
    
    editBoard(){
        $('#boardToEdit').val(this.props.id);
    }

    goToStory() {
        this.props.history.push(`${this.props.match.url}/` + this.props.id + `/stories`);
        window.sessionStorage.setItem("boardName", this.props.name);
    }

    render() {
        return (
            <tr className="clickable ng-scope">
                <td className="name-td" onClick={ this.goToStory }>
                    <div>{ this.props.name }</div>
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
                    <div>
                        In: <span className="ng-binding ng-scope">
                            { String(this.props.startTime).replace('T', ' / ') }
                        </span>
                    </div>
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
                    <div className="of ng-binding ng-scope">
                        { this.props.storiesCount }
                    </div>
                </td>
                <td className="edit-icon">
                    <i onClick={ (e) => this.editBoard(e) }
                       data-toggle="modal"
                       data-target="#editBoard"
                       className="editButton fa fa-edit"/>
                </td>
                <td className="delete-icon">
                    <span data-toggle="modal"
                          data-target="#confirm-delete"
                          className="deleteButton"
                          onClick={ (e) => this.deleteBoard(e) }>
                        <i className="delete-icon-trash fa fa-trash"/>
                    </span>
                </td>
            </tr>
        );
    }
}

export default BoardElement;