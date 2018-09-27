import React, {Component} from 'react';
import './css/style.css'

class StoryElement extends Component{

    constructor(props) {
        super(props);

        this.goToStory = this.goToStory.bind(this);
    }

    setStoryProps(){
        sessionStorage.setItem('storyId', this.props.id);
    }

    goToStory() {
        this.props.history.push(`${this.props.match.url}/` + this.props.id);
    }

    render() {
        return (
            <tr className="clickable ng-scope">
                <td className="name-td" onClick={ this.goToStory }>
                    { this.props.description }
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
                    { String(this.props.startTime).replace('T', ' / ') }
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
                    { String(this.props.finishTime).replace('T', ' / ') }
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
                    stub
                </td>
                <td className="hidden-xs" onClick={ this.goToStory }>
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
