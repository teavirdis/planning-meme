import styled from "styled-components";
import React from "react";

const StoryStyle = styled.div`margin-top: 3em;`;

const StoryTableThStyle = styled.th`
    &:hover{
        cursor: pointer,
        background: #b9bbbe
    }
`;

const StoryTableThStyleHidden = styled(StoryTableThStyle).attrs({
    className: "hidden-xs"
})``;

const StoryTableThStyleModal = styled(StoryTableThStyle).attrs({
    'data-toggle': "modal",
    'data-target': "#createStory"
})``;

const StoryEditIAttribute = styled.i.attrs({
    'data-toggle': "modal",
    'data-target': "#editStory",
    className: "editStory fa fa-edit"
})``;

const StoryDeleteTdAttribute = styled.td.attrs({
    className: "delete-icon",
    'data-toggle': "modal",
    'data-target': "#deleteStory"
})``;

export {
    StoryEditIAttribute, StoryDeleteTdAttribute, StoryStyle, StoryTableThStyle, StoryTableThStyleModal,
    StoryTableThStyleHidden
}