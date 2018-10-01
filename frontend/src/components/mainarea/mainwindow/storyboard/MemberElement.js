import React, { Component } from "react";

const liElementStyle = {
    backgroundColor: '#fff0'
};

class MemberElement extends Component {
    render () {
        return (
            <li className="list-group-item" style={liElementStyle}>{this.props.name}</li>
        );
    }
}

export default MemberElement;