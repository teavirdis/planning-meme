import React, {Component} from 'react';
import SignIn from "./signin/SignIn";
import '../../css/style.css'

const $ = window.jQuery;

class MainArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
