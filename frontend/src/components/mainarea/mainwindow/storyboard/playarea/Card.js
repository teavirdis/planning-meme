import React, {Component} from 'react';
import {
    CardBlock, CardImg
} from "../style/VotingAreaStyle";

class Card extends Component {

    render(){
        return (
            <CardBlock>
                <CardImg src={this.props.source}/>
            </CardBlock>
        );
    }
}

export default Card;