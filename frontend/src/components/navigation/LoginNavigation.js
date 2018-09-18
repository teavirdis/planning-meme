import React, {Component} from 'react';
import './css/style.css'

const divStyle = {
    marginBottom: '0px'
};

class LoginNavigation extends Component {
    render() {
        return (
            <div id="loginNavBar">
                <ul className="nav navbar-nav navbar-right">
                </ul>
                <div className="navbar" style={divStyle}>
                    <ul className="nav navbar-nav">
                        <li className="activeHome active"><a className="homeButton" href="#signIn">Home</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginNavigation;
