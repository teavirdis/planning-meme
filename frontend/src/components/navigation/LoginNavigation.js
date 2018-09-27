import React from 'react';
import {HomeButton, LoginNavigationBar, NavigationActiveLi, NavigationUl} from "./style/NavigationStyle";

class LoginNavigation extends React.Component {

    render() {
        return (
            <div id="loginNavBar">
                <LoginNavigationBar>
                    <NavigationUl>
                        <NavigationActiveLi>
                            <HomeButton href="/">Home</HomeButton>
                        </NavigationActiveLi>
                    </NavigationUl>
                </LoginNavigationBar>
            </div>
        );
    }
}

export default LoginNavigation;