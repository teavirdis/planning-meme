import React, {Component} from 'react';
import LoginNavigation from "./LoginNavigation";
import './css/style.css'


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
