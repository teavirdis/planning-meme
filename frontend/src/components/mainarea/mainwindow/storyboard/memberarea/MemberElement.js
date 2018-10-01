import React, { Component } from "react";
import {LiElement} from "../style/MemberStyle";

class MemberElement extends Component {
    render () {
        return (
            <LiElement>{this.props.name}</LiElement>
        );
    }
}

export default MemberElement;