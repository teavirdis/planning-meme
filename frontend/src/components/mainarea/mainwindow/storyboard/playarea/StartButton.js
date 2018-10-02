import React, { Component } from 'react';

class StartButton extends Component {
    render() {
        return (
            <div className="no-left-padding">
                <a className="btn btn-primary pull-left btn-lg btn-block">
                    {this.props.name}
                </a>
            </div>
        );
    }
}

export default StartButton;
