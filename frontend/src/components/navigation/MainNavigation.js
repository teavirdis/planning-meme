import React from 'react';
import SignIn from "../mainarea/signin/SignIn";
import {
    DropdownButton,
    DropdownMenu,
    DropdownToggle,
    MainNavigationBarCollapse,
    MainNavigationUl, NavigationUl,
    SignOutButton
} from "./style/NavigationStyle";


class MainNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

    componentDidMount() {
        this.setState({username: JSON.parse(SignIn.identifyCookieByName('user')).username});
    }

    static handleSignOut() {
        SignIn.deleteCookieByName('user');
        window.localStorage.removeItem("isLoggedIn");
    }

    render() {
        return (
            <div id="mainNavBar">
                <MainNavigationUl>
                    <DropdownButton>
                        <DropdownToggle>
                            <b id="userPlace">{this.state.username}</b><b className="caret"/>
                        </DropdownToggle>
                        <DropdownMenu>
                            <li><a href="/#/boards">My boards</a></li>
                            <li className="divider"/>
                            <li>
                                <SignOutButton href="/" onClick={MainNavigation.handleSignOut}>Sign Out</SignOutButton>
                            </li>
                        </DropdownMenu>
                    </DropdownButton>
                </MainNavigationUl>
                <MainNavigationBarCollapse>
                    <NavigationUl>
                        <li className="active"><a href="/">Home</a></li>
                    </NavigationUl>
                </MainNavigationBarCollapse>
            </div>
        );
    }
}

export default MainNavigation;