import React, {Component} from 'react';
import SignIn from "./signin/SignIn";
import BoardArea from "./mainwindow/boardarea/BoardArea";
import './css/style.css'

const $ = window.jQuery;

class MainArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {propOne, propTwo, ...leftOver} = this.props;

        return (
            <div className="container">
                <div className="starter-template">
                    <div className="login-form">
                         <SignIn onAuthStateChange={this.props.onAuthStateChange}
                                  isLoggedIn={this.props.isLoggedIn}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainArea;
