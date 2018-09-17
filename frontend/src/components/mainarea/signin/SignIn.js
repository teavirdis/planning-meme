import React, {Component} from 'react';
import './css/style.css'
import axios from 'axios';
import styled from "styled-components";

const $ = window.jQuery;

const Button = styled.button.attrs(
    {
        type: "submit",
        className: "btn btn-primary hidden-xs",
        name: "loginButton"
    })`
     width: 100%`;

const Input = styled.input.attrs({
    type: "text",
    className: "fa form-control",
    placeholder: "Enter your name",
    name: "usernameArea"
})` width: 100%
    margin-bottom: 2px`;

const H2 = styled.h2.attrs({
    className: "text-center"
})``;

const SignInDiv = styled.div.attrs({
    id: "signIn",
    className: "collapse indent in"
})``;

class SignIn extends Component {

    state = {
        username: ''
    };

    static collapseRequirementElements() {
        $('.collapse').collapse('hide');
        $('#loginNavBar').hide();
        $('#boardArea').show();
        $('#storyArea').hide();
        $('#mainNavBar').show();
    }

    addValue = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/meme/users/', {
            username: this.state.username
        })
            .then(() => {
                SignIn.collapseRequirementElements();
            })
            .catch(error => {
                alert(error);
            });
        return false;
    };

    onInputChange = (e) => this.setState({
        username: e.target.value
    });

    render() {
        return (
            <SignInDiv>
                <form onSubmit={this.addValue}>
                    <H2>Let's start!</H2>
                    <Input required="required" onChange={this.onInputChange}/>
                    <Button>Enter</Button>
                </form>
            </SignInDiv>
        );
    }
}

export default SignIn;
