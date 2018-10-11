import React from 'react';
import {
    DropdownButton,
    DropdownMenu,
    DropdownToggle,
    MainNavigationBarCollapse,
    MainNavigationUl, NavigationUl,
    SignOutButton, UserPlace
} from "./style/NavigationStyle";
import MemeUtil from "../../util/MemeUtil";
import {USER_COOKIE_NAME} from "../../util/TextConstant";

class MainNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

    static handleSignOut() {
         MemeUtil.deleteCookieByName(USER_COOKIE_NAME);
         window.localStorage.removeItem("isLoggedIn");
    }

    componentDidMount() {
        try{
            this.setState({username: JSON.parse(MemeUtil.identifyCookieByName(USER_COOKIE_NAME)).username});
        }catch(err){
            MemeUtil.deleteCookieByName(USER_COOKIE_NAME);
            window.localStorage.removeItem("isLoggedIn");
            window.location.reload();
        }
    }


    render() {
        return (
            <div id="mainNavBar">
                <MainNavigationUl>
                    <DropdownButton>
                        <DropdownToggle>
                            <UserPlace id="userPlace">{this.state.username}</UserPlace><b className="caret"/>
                        </DropdownToggle>
                        <DropdownMenu>
                            <li><a href={"/#/boards"}>My boards</a></li>
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