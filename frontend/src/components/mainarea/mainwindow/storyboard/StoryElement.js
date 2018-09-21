import React, {Component} from 'react';
import './css/style.css'

class StoryElement extends Component{

    setStoryProps(){
        sessionStorage.setItem('storyId', this.props.id);
    }

    render() {
        return (
            <tr className="clickable ng-scope">
                <td className="name-td">
                    { this.props.description }
                </td>
                <td className="hidden-xs">
                    { String(this.props.startTime).replace('T', ' / ') }
                </td>
                <td className="hidden-xs">
                    { String(this.props.finishTime).replace('T', ' / ') }
                </td>
                <td className="hidden-xs">
                    stub
                </td>
                <td className="hidden-xs">
                    { this.props.estimation }
                </td>
                <td className="edit-icon" onClick={() => this.setStoryProps()}>
                    <i data-toggle="modal" data-target="#editStory" className="editStory fa fa-edit"/>
                </td>
                <td className="delete-icon"
                    onClick={() => this.setStoryProps()}
                    data-toggle="modal"
                    data-target="#deleteStory">
                    <i className="delete-icon-trash fa fa-trash"/>
                </td>
            </tr>
        );
    }
}

export default StoryElement;
