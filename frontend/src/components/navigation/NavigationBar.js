import React from 'react';
import LoginNavigation from "./LoginNavigation";
import MainNavigation from "./MainNavigation";


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let navBar;

        if (this.props.isLoggedIn) {
            navBar = <MainNavigation/>;
        } else {
            navBar = <LoginNavigation/>;
        }

        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    {navBar}
                </div>
            </div>
        );
    }
}

export default NavigationBar;