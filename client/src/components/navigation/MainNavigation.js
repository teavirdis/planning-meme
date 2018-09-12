import React, { Component } from 'react';
import './css/style.css'
import jQuery from 'jquery'
import $ from "jquery";

const divStyle = {
    padding: '0.25%'
};

function goFromStoryToBoard(){
    jQuery('#storyArea').hide();
    jQuery('#boardArea').show();
}

class MainNavigation extends Component {
    componentDidUpdate() {
        $('.signOut').bootstrapToggle();
        $('.dropdown').bootstrapToggle();
    }
    render() {
        return (
            <div id="mainNavBar">
                <ul className="nav navbar-nav navbar-right " style={divStyle}>
                    <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">User <b
    className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#" onClick={goFromStoryToBoard}>Board</a></li>
                            <li className="divider"/>
                            <li><a className="signOut" href="#signIn" name="collapseHref" data-toggle="collapse">Sign Out</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#" onClick={goFromStoryToBoard}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavigation;