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
    className: "text-center"
})`-webkit-box-shadow: 0 0 15px 0 rgba(1,1,1,.15); -moz-box-shadow: 0 0 15px 0 rgba(1,1,1,.15);
  box-shadow: 0 0 15px 0 rgba(1,1,1,.15);`;

const CardsBlock = styled.div` text-align: left; color: #808284; padding-bottom: 5px;  -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg); -o-transform: rotate(-180deg);  transform: rotate(-180deg);
    ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);`;

const CardsUl = styled.ul` margin: 8px; padding: 5px; width: 133px; background-color: #fff;
    border: none; -moz-border-radius: 4px; -webkit-border-radius: 4px;
    border-radius: 4px; -webkit-box-shadow: 0 0 5px 0 rgba(1,1,1,.05);`;

const CardBlock = styled.li``;

const CardButton = styled.button` ${CardBlock}`;

const LeftIcon = styled.div`text-align: left; color: #808284; padding-bottom: 5px;`;

const RightIcon = styled.div`${CardsBlock}`;

const CenterIcon = styled.div`text-align: center; font-size: 46px; color: #131b23; border: 1px solid #d5d9de; padding-top: 50px; 
   padding-bottom: 50px; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; 
   margin-left: 16px; font-weight: 300; font-family: Lato,sans-serif; 
   margin-right: 16px; max-height: 120px;`;

export {
    VotingDiv, PlayingArea, PlayBoard, PlayGround, CardsBlock, CardsUl, CardBlock, CardButton, LeftIcon, RightIcon,
    CenterIcon
}