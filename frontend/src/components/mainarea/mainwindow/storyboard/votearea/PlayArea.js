import React, { Component } from 'react';
import {
    CardBlock,
    CardButton,
    CardsBlock,
    CardsUl, CenterIcon,
    LeftIcon,
    PlayBoard,
    PlayGround,
    PlayingArea, RightIcon
} from "../style/VotingAreaStyle";

class PlayArea extends Component {
    render() {
        return (
            <PlayingArea>
                <PlayBoard>
                    <PlayGround>
                        <CardsBlock>
                            <CardsUl>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>0</LeftIcon>
                                        <CenterIcon>0</CenterIcon>
                                        <RightIcon>0</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>½</LeftIcon>
                                        <CenterIcon>½</CenterIcon>
                                        <RightIcon>½</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>1</LeftIcon>
                                        <CenterIcon>1</CenterIcon>
                                        <RightIcon>1</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>2</LeftIcon>
                                        <CenterIcon>2</CenterIcon>
                                        <RightIcon>2</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>3</LeftIcon>
                                        <CenterIcon>3</CenterIcon>
                                        <RightIcon>3</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>5</LeftIcon>
                                        <CenterIcon>5</CenterIcon>
                                        <RightIcon>5</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>8</LeftIcon>
                                        <CenterIcon>8</CenterIcon>
                                        <RightIcon>8</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>13</LeftIcon>
                                        <CenterIcon>13</CenterIcon>
                                        <RightIcon>13</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>20</LeftIcon>
                                        <CenterIcon>20</CenterIcon>
                                        <RightIcon>20</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>40</LeftIcon>
                                        <CenterIcon>40</CenterIcon>
                                        <RightIcon>40</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>100</LeftIcon>
                                        <CenterIcon>100</CenterIcon>
                                        <RightIcon>100</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>?</LeftIcon>
                                        <CenterIcon>?</CenterIcon>
                                        <RightIcon>?</RightIcon>
                                    </CardButton>
                                </CardBlock>
                                <CardBlock>
                                    <CardButton>
                                        <LeftIcon>C</LeftIcon>
                                        <div className="center-icon cofee">
                                            <img className="hover" src="https://planitpoker.azureedge.net/Content/cofee.png"/>
                                        </div>
                                        <RightIcon>C</RightIcon>
                                    </CardButton>
                                </CardBlock>
                            </CardsUl>
                        </CardsBlock>
                    </PlayGround>
                </PlayBoard>
            </PlayingArea>
        );
    }
}

export default PlayArea;
