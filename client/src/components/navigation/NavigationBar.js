import React, {Component} from 'react';
import LoginNavigation from "./loginNavigation/LoginNavigation";
import MainNavigation from "./mainNavigation/MainNavigation";


class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <LoginNavigation />
                </div>
            </div>
        );
    }
}

export default NavigationBar;
