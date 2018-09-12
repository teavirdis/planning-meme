import React, { Component } from 'react';
import './css/style.css'
import $ from 'jquery';

class StoryTable extends Component {
    componentDidUpdate() {
        $('.createStory').bootstrapToggle();
        $('.editStory').bootstrapToggle();
        $('.confirm-delete').bootstrapToggle();
    }
    render() {
        return (
            <div className="row grayed-box-app">
                <table className="table table-hover table-boards">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hidden-xs">Start time</th>
                        <th className="hidden-xs">Finish time</th>
                        <th className="hidden-xs">Votes</th>
                        <th className="hidden-xs">Estimation</th>
                        <th className="create-icon"><i data-toggle="modal" data-target="#createStory" className="createStory fa fa-plus"/> New</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="text-left">
                    <tr className="clickable ng-scope" >
                        <td className="name-td">First story</td>
                        <td className="hidden-xs">08:54</td>
                        <td className="hidden-xs">08:56</td>
                        <td className="hidden-xs">3 of 3</td>
                        <td className="hidden-xs">5</td>
                        <td className="edit-icon"><i data-toggle="modal" data-target="#editStory" className="editStory fa fa-edit"/></td>
                        <td className="delete-icon"><span data-toggle="modal" data-target="#confirm-delete" className="confirm-delete"><img className="hover deleteImg" src="https://planitpoker.azureedge.net/Content/delete-icon-hover.png"/></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StoryTable;
