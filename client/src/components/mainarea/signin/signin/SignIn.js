import React, { Component } from 'react';
import $ from 'jquery';

class SignIn extends Component {
    componentDidUpdate() {
        $('.createNewUser').bootstrapToggle();
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
                    <div className="form-group" onClick={this.handleClick}>
                        <a className="createNewUser btn btn-primary hidden-xs" name="collapseLogin" data-toggle="collapse">Enter</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;