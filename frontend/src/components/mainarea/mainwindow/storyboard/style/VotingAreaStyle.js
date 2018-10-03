import styled from "styled-components";

const PlayingArea = styled.div.attrs({
    className: "col-md-9"
})``;

const CardsUl = styled.ul.attrs({
    className: "list-inline text-center"
})`width: 100%; background-color: transparent;  box-shadow: rgba(1, 1, 1, 0.05) 0px 0px 5px 0px;
    transform: rotate(0deg); list-style-type: none; margin: 8px; padding: 5px; border-width: initial;
    border-style: none; border-color: initial; border-image: initial;  border-radius: 4px;`;

const CardBlock = styled.li.attrs({
    className: "cardImg"
})`padding-left: 0`;

const CardImg = styled.img`
padding: 5px; 
width: 9.813em; 
height: 14.375em;`;

export {
    PlayingArea, CardsUl, CardBlock, CardImg
}