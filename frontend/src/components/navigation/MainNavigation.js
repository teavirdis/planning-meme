import React from 'react';
import SignIn from "../mainarea/signin/SignIn";

const divStyle = {
    padding: '0.25%',
    marginBottom: '-5px'
};

class MainNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: "" };
    }

    componentDidMount() {
        this.setState({username: SignIn.getCookie('username')});
    }

    handleSignOut() {
        SignIn.deleteCookie('username');
        window.localStorage.removeItem("isLoggedIn");
    }

    render() {
        return (
            <div id="mainNavBar">
                <ul className="nav navbar-nav navbar-right " style={divStyle}>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <b id="userPlace">{this.state.username}</b><b className="caret"/>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="/boards">
                                    My boards
                                </a>
                            </li>
                            <li className="divider"/>
                            <li>
                                <a className="sign-out" href="/" onClick={ this.handleSignOut }>
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavigation;