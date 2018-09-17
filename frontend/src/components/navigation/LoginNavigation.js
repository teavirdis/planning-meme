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
                    {/*<li><a id="signInButton" className="btn btn-primary hidden-xs" href="#signIn">Sign In</a></li>*/}
                    {/*<li><a className="btn btn-default btn-one hidden-xs" href="#signUp" name="collapseHref"*/}
                    {/*data-toggle="collapse">Sign Up</a></li>*/}
                </ul>
                <div className="navbar" style={divStyle}>
                    <ul className="nav navbar-nav">
                        <li className="activeHome active"><a className="homeButton" href="#signIn">Home</a></li>
                        {/*<li><a href="#about">About</a></li>*/}
                        {/*<li><a href="#contact">Contact</a></li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginNavigation;
