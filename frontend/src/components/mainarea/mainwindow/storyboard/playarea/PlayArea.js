import React, {Component} from 'react';
import {
    CardsUl,
    PlayingArea
} from "../style/VotingAreaStyle";
import Card from "./Card";
import StartButton from "./StartButton";
import MemberList from "../memberarea/MemberList";

const StartPlayStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: 'transparent',
    boxShadow: 'rgba(1, 1, 1, 0.05) 0px 0px 5px 0px',
    margin: '8px',
    padding: '5px',
    borderWidth: 'initial',
    borderStyle: 'none',
    borderColor: 'initial',
    borderImage: 'initial',
    borderRadius: '8px;'
};

class PlayArea extends Component {
    state = {
        data: ["resources/images/0_card.png", "resources/images/half_card.png", "resources/images/1_card.png",
            "resources/images/2_card.png", "resources/images/3_card.png", "resources/images/5_card.png",
            "resources/images/8_card.png", "resources/images/13_card.png",
            "resources/images/20_card.png", "resources/images/40_card.png", "resources/images/100_card.png",
            "resources/images/coffee_card.png", "resources/images/question_card.png"]
    };

    componentDidMount() {
        this.setState({
            cards: this.state.data.map(function (sourcePath) {
                return <Card source={sourcePath}/>
            })
        });
    }

    render() {
        return (
            <div className="col-md-12">
                <PlayingArea>
                    <CardsUl>
                        {this.state.cards}
                    </CardsUl>
                </PlayingArea>
                <div className="col-md-2 col-md-offset-1">
                    <div style={StartPlayStyle}>
                        <StartButton/>
                    </div>
                    <MemberList/>
                </div>
            </div>
        );
    }
}

export default PlayArea;
