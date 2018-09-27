import styled from "styled-components";
import React from "react";

const VotingDiv = styled.div.attrs({
    className: "col-md-4"
})``;

const PlayingArea = styled.div.attrs({
    className: "col-md-8"
})``;

const PlayBoard = styled.div.attrs({
    className: "page-board-vote"
})``;

const PlayGround = styled.section.attrs({
    className: "playground text-center"
})``;

const CardsBlock = styled.div.attrs({
    className: "cards-block"
})``;

const CardsUl = styled.ul.attrs({
    className: "cards"
})``;

const CardBlock = styled.li.attrs({
    className: "ng-scope"
})``;

const CardButton = styled.button.attrs({
    className: "ng-scope"
})``;

const LeftIcon = styled.div.attrs({
    className: "left-icon ng-binding"
})``;

const RightIcon = styled.div.attrs({
    className: "right-icon ng-binding"
})``;

const CenterIcon = styled.div.attrs({
    className: "right-icon ng-binding"
})``;

export {
    VotingDiv, PlayingArea, PlayBoard, PlayGround, CardsBlock, CardsUl, CardBlock, CardButton, LeftIcon, RightIcon,
    CenterIcon
}