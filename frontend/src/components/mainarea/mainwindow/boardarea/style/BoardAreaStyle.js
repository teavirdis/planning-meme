import styled from "styled-components";

const BoardAreaDiv = styled.div``;

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

export {
    BoardAreaDiv, BoardHiddenSpan, BoardTableBindDiv, BoardTableDeleteIcon, BoardEditIAttribute, BoardTableDeleteSpan,
    BoardPaginationUl
}