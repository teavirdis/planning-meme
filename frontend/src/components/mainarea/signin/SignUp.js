import React, { Component } from 'react';
import './css/style.css'

const $ = window.jQuery;

class SignUp extends Component {
    componentDidUpdate() {
        $('.form-group').toggle();
    }
    render() {
        return (
            <div id="signUp" className="collapse">
                <form>
                    <h2 className="text-center">Sign up for free!</h2>
                    <div className="form-group">
                        <input type="text" className="fa form-control" placeholder="&#xf007 Enter your name"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="fa form-control" placeholder="&#xf0e0 Enter your email"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="fa form-control" placeholder="&#xf023 Enter your password"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <a className="btn btn-primary hidden-xs" href="#mainWindow" name="collapseLogin"
                           data-toggle="collapse">Sign up</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
