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

    setStoryProps() {
        sessionStorage.setItem('storyId', this.props.id);
    }

    render() {
        return (
            <TableTrClickableTitle>
                <TableNamedTd>{this.props.description}</TableNamedTd>
                <TableHiddenXs>{String(this.props.startTime).replace('T', ' / ')} </TableHiddenXs>
                <TableHiddenXs>{String(this.props.finishTime).replace('T', ' / ')}</TableHiddenXs>
                <TableHiddenXs>stub</TableHiddenXs>
                <TableHiddenXs>{this.props.estimation}</TableHiddenXs>
                <TableEditIcon onClick={() => this.setStoryProps()}>
                    <StoryEditIAttribute/>
                </TableEditIcon>
                <StoryDeleteTdAttribute onClick={() => this.setStoryProps()}>
                    <DeleteIAttribute/>
                </StoryDeleteTdAttribute>
            </TableTrClickableTitle>
        );
    }
}

export default StoryElement;
