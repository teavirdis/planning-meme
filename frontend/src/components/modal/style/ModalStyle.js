import styled from "styled-components";

const divStyle = {
    background: '#920d0d80',
    color: '#5d0707'
};

const ModalDialogDiv = styled.div.attrs({
    className: "modal",
    tabIndex: "-1",
    role: "dialog",
    'aria-hidden': "true"
})``;

const ModalDialog = styled.div.attrs({
    className: "modal-dialog"
})``;

const ModalContent = styled.div.attrs({
    className: "modal-content panel-warning"
})``;

const ModalTitle = styled.h4.attrs({
    className: "modal-title"
})``;

const ModalHeader = styled.div.attrs({
    className: "modal-header"
})``;

const ModalBody = styled.div.attrs({
    className: "modal-body"
})``;

const ModalInput = styled.input.attrs({
    type: "text",
    className: "form-control"
})``;

const ModalFooter = styled.div.attrs({
    className: "modal-footer"
})``;

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-default",
    'data-dismiss': "modal"
})``;

const SmallCloseButton = styled.button.attrs({
    type: "button",
    className: "close",
    'data-dismiss': "modal",
    'aria-hidden': "true"
})``;

const CloseButton = styled.button.attrs({
    className: "btn btn-danger btn-ok",
    'data-dismiss': "modal"
})``;

export {
    ModalDialogDiv, ModalDialog, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalInput, ModalFooter, Button,
    SmallCloseButton, CloseButton, divStyle
}
