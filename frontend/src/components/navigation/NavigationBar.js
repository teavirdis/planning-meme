import React from 'react';
import LoginNavigation from "./LoginNavigation";
import MainNavigation from "./MainNavigation";
import {NavigationArea, NavigationContainer} from "./style/NavigationStyle";


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let navBar = (this.props.isLoggedIn) ? <MainNavigation {...this.props}/> : <LoginNavigation/>;

        return (
            <NavigationArea>
                <NavigationContainer>{navBar}</NavigationContainer>
            </NavigationArea>
        );
    }
}

export default NavigationBar;