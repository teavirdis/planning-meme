import styled from "styled-components";
import React from "react";

const BoardAreaDiv = styled.div`margin-top: 3em;`;

const BoardHiddenSpan = styled.span.attrs({
    className: "ng-binding ng-scope"
})``;

const BoardTableBindDiv = styled.div.attrs({
    className: "of ng-binding ng-scope"
})``;

const BoardTableDeleteIcon = styled.td.attrs({
    className: "delete-icon"
})``;

const BoardEditIAttribute = styled.i.attrs({
    'data-toggle': "modal",
    'data-target': "#editBoard",
    className: "editButton fa fa-edit"
})``;

const BoardTableDeleteSpan = styled.span.attrs({
    'data-toggle': "modal",
    'data-target': "#confirm-delete",
    className: "deleteButton"
})``;

const BoardPaginationUl = styled.ul.attrs({
    className: "pagination pagination-lg"
})``;

const CreateButton = styled.div.attrs({
    className: "no-left-padding"
})``;

const ButtonAttribute = styled.a.attrs({
    className: "btn btn-primary pull-right fa btn btn-default",
    'data-target': "#createBoard",
    'data-toggle': "modal"
})`padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.428571429;
    text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none;
    border: 1px solid transparent; border-radius: 4px;`;

export {
    BoardAreaDiv, BoardHiddenSpan, BoardTableBindDiv, BoardTableDeleteIcon, BoardEditIAttribute, BoardTableDeleteSpan,
    BoardPaginationUl, CreateButton, ButtonAttribute
}