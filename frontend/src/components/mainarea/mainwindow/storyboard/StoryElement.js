import React, {Component} from 'react';
import './css/style.css'

class StoryElement extends Component{
    render() {
        return (
          <tr className="clickable ng-scope">
                        <td className="name-td">{this.props.description}</td>
                        <td className="hidden-xs">{String(this.props.startTime).replace('T', ' / ')}</td>
                        <td className="hidden-xs">{String(this.props.finishTime).replace('T', ' / ')}</td>
                        <td className="hidden-xs">3 of 3</td>
                        <td className="hidden-xs">{this.props.estimation}</td>
                        <td className="edit-icon">
                            <i data-toggle="modal" data-target="#editStory" className="editStory fa fa-edit"/></td>
                        <td className="delete-icon">
                            <span data-toggle="modal" data-target="#deleteStory" className="deleteButton"><img
                                className="hover deleteImg"
                                src="https://planitpoker.azureedge.net/Content/delete-icon-hover.png"/></span>
                        </td>
                    </tr>
        );
    }
}

export default StoryElement;
