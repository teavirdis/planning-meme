import React, {Component} from 'react';
import {
    DeleteIAttribute,
    TableEditIcon,
    TableHiddenXs,
    TableNamedTd,
    TableTrClickableTitle
} from "../style/MainWindowStyle";
import {StoryDeleteTdAttribute, StoryEditIAttribute} from "./style/StoryAreaStyle";

class StoryElement extends Component {

    constructor(props) {
        super(props);
        this.goToStory = this.goToStory.bind(this);
    }

    setStoryProps() {
        sessionStorage.setItem('storyId', this.props.id);
    }

    goToStory() {
        this.props.history.push(`${this.props.match.url}/` + this.props.id);
        this.props.specifyStoryName(this.props.description);
    }

    deleteStory() {
        this.props.onChangeStoryIdToDelete(this.props.id);
    }

    editStory() {
        this.props.onChangeStoryIdToEdit(this.props.id);
        this.props.onChangeStoryNameToEdit(this.props.description);
    }

    render() {
        return (
            <TableTrClickableTitle>
                <TableNamedTd onClick={ this.goToStory }>{this.props.description}</TableNamedTd>
                <TableHiddenXs onClick={ this.goToStory }>{String(this.props.startTime).replace('T', ' / ')} </TableHiddenXs>
                <TableHiddenXs onClick={ this.goToStory }>{String(this.props.finishTime).replace('T', ' / ')}</TableHiddenXs>
                <TableHiddenXs onClick={ this.goToStory }>stub</TableHiddenXs>
                <TableHiddenXs onClick={ this.goToStory }>{this.props.estimation}</TableHiddenXs>
                <TableEditIcon onClick={(e) => this.editStory(e)}>
                    <StoryEditIAttribute/>
                </TableEditIcon>
                <StoryDeleteTdAttribute onClick={(e) => this.deleteStory(e)}>
                    <DeleteIAttribute/>
                </StoryDeleteTdAttribute>
            </TableTrClickableTitle>
        );
    }
}

export default StoryElement;