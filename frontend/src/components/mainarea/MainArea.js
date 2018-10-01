import React, {Component} from 'react';
import '../../css/style.css'
import SignIn from "./signin/SignIn";

class MainArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="starter-template">
                    <div className="login-form">
                         <SignIn onAuthStateChange={ this.props.onAuthStateChange }
                                 isLoggedIn={ this.props.isLoggedIn }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainArea;
