import React, {Component} from 'react';
import SignIn from "./signin/SignIn";
import SignUp from "./signin/SignUp";
import BoardArea from "./mainwindow/boardarea/BoardArea";
import StoryArea from "./mainwindow/storyboard/StoryArea";
import './css/style.css'

const $ = window.jQuery;


class MainArea extends Component {
    componentDidMount() {
        $('#mainNavBar').hide();
        $('#storyArea').hide();
        $('#boardArea').hide();
        $("[name='collapseHref']").click(function () {
            $(".collapse").collapse('hide');
            $('#mainNavBar').hide();
            $('#boardArea').hide();
            $('#storyArea').hide();
            $('#loginNavBar').show();
        });
        $("[name='collapseLogin']").click(function (e) {
            $('.collapse').collapse('hide');
            $('#loginNavBar').hide();
            $('#boardArea').show();
            $('#storyArea').hide();
            $('#mainNavBar').show();
        });
    }

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
