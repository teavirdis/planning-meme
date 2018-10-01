import styled from "styled-components";

const VotingDiv = styled.div.attrs({
    className: "col-md-4"
})``;

const PlayingArea = styled.div.attrs({
    className: "col-md-10"
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

const CardsUl = styled.ul.attrs({
    className: "list-inline text-center"
})`width: 100%; background-color: transparent;  box-shadow: rgba(1, 1, 1, 0.05) 0px 0px 5px 0px;
    transform: rotate(0deg); list-style-type: none; margin: 8px; padding: 5px; border-width: initial;
    border-style: none; border-color: initial; border-image: initial;  border-radius: 4px;`;

const CardBlock = styled.li`padding-left: 0`;

const CardImg = styled.img`
padding: 5px; 
width: 157px; 
height: 230px;`;

export {
    VotingDiv, PlayingArea, PlayBoard, PlayGround, CardsBlock, CardsUl, CardBlock, CardImg
}