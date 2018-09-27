import styled from "styled-components";
import React from "react";

const AreaContainer = styled.div.attrs({
    className: "container"
})``;

const AreaColumns = styled.div.attrs({
    className: "col-md-12 col-md-12 text-left no-top-padding"
})``;

const AreaTitle = styled.div` color: #808284; font-size: 24px; margin-top: 9px; margin-bottom: 15px;`;

const AreaRow = styled.div.attrs({
    className: "row"
})``;

const TableThStyle = styled.th`
    &:hover{
        cursor: pointer,
        background: #b9bbbe
    }
    font-weight: 400;
    border-bottom: 2px solid #ddd;
`;

const TableThStyleHidden = styled(TableThStyle).attrs({
    className: "hidden-xs"
})``;

const TableThStyleModal = styled(TableThStyle).attrs({
    'data-toggle': "modal",
    'data-target': "#createStory"
})``;

const TableTrClickableTitle = styled.tr.attrs({
    className: "clickable ng-scope"
})``;

const TableNamedTd = styled.td.attrs({
    className: "name-td"
})``;

const TableHiddenXs = styled.td.attrs({
    className: "hidden-xs"
})``;

const TableEditIcon = styled.td.attrs({
    className: "edit-icon"
})``;

const DeleteIAttribute = styled.i.attrs({
    className: "delete-icon-trash fa fa-trash"
})``;

const TableRow = styled.div.attrs({
    className: "row grayed-box-app"
})``;

const Table = styled.table.attrs({
    className: "table table-hover table-boards"
})`width: 100%; max-width: 100%; margin-top: 50px; font-weight: 400; font-family: "Open Sans",sans-serif;`;

export {
    AreaContainer, AreaColumns, AreaTitle, AreaRow, TableTrClickableTitle, TableNamedTd, TableHiddenXs,
    TableEditIcon, DeleteIAttribute, Table, TableRow, TableThStyle, TableThStyleHidden, TableThStyleModal
}