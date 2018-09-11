import React, {Component} from 'react';
import SignIn from "./signin/signin/SignIn";
import SignUp from "./signin/signup/SignUp";

class MainArea extends Component {
    render() {
        return (
            <div className="container">
            <div className="starter-template">
                <div className="col-md-6 col-md-offset-3 login-form">
                    <SignIn/>
                </div>
            </div>
            </div>
        );
    }
}

export default MainArea;
