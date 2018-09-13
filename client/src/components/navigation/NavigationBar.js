import React, {Component} from 'react';
import LoginNavigation from "./LoginNavigation";
import './css/style.css'
import MainNavigation from "./MainNavigation";


class NavigationBar extends Component {

    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <LoginNavigation />
                    <MainNavigation/>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
