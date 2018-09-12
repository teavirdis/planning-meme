import React, { Component } from 'react';
import $ from 'jquery';
import './css/style.css'

class SignIn extends Component {
    componentDidUpdate() {
        $('.form-group').bootstrapToggle();
    }
    render() {
        return (
            <div id="signIn" className="collapse indent in">
                <form>
                    <h2 className="text-center">Let's start!</h2>
                    <div className="form-group">
                        <input type="text" className="fa form-control" placeholder="Enter your name"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <a className="btn btn-primary hidden-xs" href="#mainWindow" name="collapseLogin"
                           data-toggle="collapse">Enter</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
