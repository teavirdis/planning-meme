import React, { Component } from 'react';
import './css/style.css'

const $ = window.jQuery;

const divStyle = {
    padding: '0.25%'
};

class LoginNavigation extends Component {
    componentDidMount() {
        $('.SignInX').toggle();
        $('.SignUpX').toggle();
    }
    render() {
        return (
            <div id="loginNavBar">
                <ul className="nav navbar-nav navbar-right navbar-collapse" style={divStyle}>
                    <li><a id="signInButton" className="SignInX btn btn-primary hidden-xs" href="#signIn" name="collapseHref"
                           data-toggle="collapse">Sign In</a></li>
                    <li><a className="SignUpX btn btn-default btn-one hidden-xs" href="#signUp" name="collapseHref"
                           data-toggle="collapse">Sign Up</a></li>
                </ul>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="activeHome active"><a className="homeButton" href="#signIn" name="collapseHref" data-toggle="collapse">Home</a>
                        </li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginNavigation;
