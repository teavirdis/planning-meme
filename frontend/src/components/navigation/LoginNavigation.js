import React from 'react';
import './css/style.css'

const divStyle = {
    marginBottom: '0px'
};

class LoginNavigation extends React.Component {

    render() {
        return (
            <div id="loginNavBar">
                <div className="navbar" style={divStyle}>
                    <ul className="nav navbar-nav">
                        <li className="activeHome active"><a className="homeButton" href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginNavigation;