import React, {Component} from 'react';
import SignIn from "./signin/SignIn";
import SignUp from "./signin/SignUp";
import BoardArea from "./mainwindow/boardarea/BoardArea";
import StoryArea from "./mainwindow/storyboard/StoryArea";
import './css/style.css'
import jQuery from 'jquery'
import $ from "jquery";

jQuery('#mainNavBar').hide();
jQuery('#storyArea').hide();
$("[name='collapseHref']").click(function(){
    $(".collapse").collapse('hide');
    jQuery('#mainNavBar').hide();
    jQuery('#boardArea').show();
    jQuery('#storyArea').hide();
    jQuery('#loginNavBar').show();
});

class MainArea extends Component {
    render() {
        return (
            <div className="container">
            <div className="starter-template">
                <div className="col-md-12 login-form">
                    <SignIn/>
                    <SignUp/>
                    <BoardArea/>
                    <StoryArea/>
                </div>
            </div>
            </div>
        );
    }
}

export default MainArea;
