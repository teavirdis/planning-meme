import React from 'react';
import SignIn from "./signin/SignIn";
import BoardArea from "./mainwindow/boardarea/BoardArea";
import './css/style.css'

const $ = window.jQuery;

class MainArea extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="starter-template">
                    <div className="login-form">
                        <SignIn/>
                        <BoardArea/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainArea;
