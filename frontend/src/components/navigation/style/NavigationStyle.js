import styled from "styled-components";
import React from "react";

const loginDivStyle = {
    marginBottom: '0px'
};
const UserPlace = styled.b`font-weight: 400;`;
const mainDivStyle = {
    padding: '0.25%',
    marginBottom: '-5px'
};
const LoginNavigationBar = styled.div.attrs({
    className: "navbar"
})`${loginDivStyle}`;

const NavigationUl = styled.ul.attrs({
    className: "nav navbar-nav"
})``;

const MainNavigationUl = styled.ul.attrs({
    className: "nav navbar-nav navbar-right "
})`${mainDivStyle}`;

const DropdownButton = styled.li.attrs({
    className: "dropdown"
})``;

const DropdownToggle = styled.a.attrs({
    className: "dropdown-toggle",
    'data-toggle': "dropdown"
})``;

const DropdownMenu = styled.ul.attrs({
    className: "dropdown-menu"
})``;

const NavigationActiveLi = styled.li.attrs({
    className: "activeHome active"
})``;

const HomeButton = styled.a.attrs({
    className: "homeButton"
})``;

const SignOutButton = styled.a.attrs({
    className: "sign-out"
})``;

const MainNavigationBarCollapse = styled.div.attrs({
    className: "collapse navbar-collapse"
})``;

const NavigationArea = styled.div.attrs({
    className: "navbar navbar-inverse navbar-fixed-top"
})``;

const NavigationContainer = styled.div.attrs({
    className: "container"
})``;

export {
    LoginNavigationBar, NavigationUl, NavigationActiveLi, HomeButton, MainNavigationUl, DropdownButton, UserPlace,
    DropdownToggle, DropdownMenu, SignOutButton, MainNavigationBarCollapse, NavigationArea, NavigationContainer
}
