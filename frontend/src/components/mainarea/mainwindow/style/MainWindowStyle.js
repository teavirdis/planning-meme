import styled from "styled-components";
import React from "react";

const AreaContainer = styled.div.attrs({
    className: "container"
})``;

const AreaColumns = styled.div.attrs({
    className: "col-md-12 col-md-12 text-left no-top-padding"
})``;

const AreaTitle = styled.div.attrs({
    className: "title"
})``;

const AreaRow = styled.div.attrs({
    className: "row"
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
})``;

export {
    AreaContainer, AreaColumns, AreaTitle, AreaRow, TableTrClickableTitle, TableNamedTd, TableHiddenXs,
    TableEditIcon, DeleteIAttribute, Table, TableRow
}