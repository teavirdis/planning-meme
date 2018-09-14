import React, {Component} from 'react';
import './css/style.css'
import axios from 'axios';

const $ = window.jQuery;
const divStyle = {
    width: '100%'
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.addValue = this.addValue.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    addValue(evt) {
        evt.preventDefault();
        axios.post('http://localhost:8081/meme/users/', {
            username: this.state.value
        })
            .then(function (response) {
                console.log(response);
                $('.collapse').collapse('hide');
                $('#loginNavBar').hide();
                $('#boardArea').show();
                $('#storyArea').hide();
                $('#mainNavBar').show();
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });
        return false;
    }

    updateInput(evt) {
        this.state = {value: evt.target.value};
    }

    render() {
        return (
            <div id="signIn" className="collapse indent in">
                <form onSubmit={this.addValue}>
                    <h2 className="text-center">Let's start!</h2>
                    <div>
                        <input type="text" className="fa form-control" placeholder="Enter your name" name="usernameArea" required="required"
                               onChange={this.updateInput}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary hidden-xs" name="loginButton" style={divStyle}>Enter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
