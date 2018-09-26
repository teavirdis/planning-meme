import React, {Component} from 'react';
import axios from 'axios';
import styled from "styled-components";

const formStyle = {
    marginTop: '10%'
};
const Button = styled.button.attrs({
        type: "submit",
        className: "btn btn-primary hidden-xs",
        name: "loginButton"
    })`width: 100%`;
const Input = styled.input.attrs({
    type: "text",
    className: "fa form-control",
    placeholder: "Enter your name",
    pattern: "^(?=.{3,20}$)(?![_])(?!.*[_]{2,})[a-zA-Z0-9_]+(?<![_])$",
    title: "Length of the name must be between 3 and 20 characters",
    name: "usernameArea"
})`width: 100% margin-bottom: 2px`;
const H2 = styled.h2.attrs({
    className: "text-center"
})``;
const SignInDiv = styled.div.attrs({
    id: "signIn",
    className: "col-md-8 col-md-offset-2 collapse in"
})``;

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: ''
    };

    static getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([.$?*|()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
        ));

       return matches ? decodeURIComponent(matches[1]).replace('|', ',') : undefined;
    }

    static deleteCookie(name) {
        document.cookie = name+"=; path=/; domain=.hanatrial.ondemand.com; expires=Session";
    }

    addValue = (e) => {
        e.preventDefault();
        axios.post('/meme/users/', {
            username: this.state.username
        })
            .then(() => {
                this.props.onAuthStateChange();
            })
            .catch(error => {
                alert(error);
            });
    };

    onInputChange = (e) => this.setState({
        username: e.target.value
    });

    render() {
        return (
            <SignInDiv>
                <form onSubmit={this.addValue} style={formStyle}>
                    <H2>Let's start!</H2>
                    <Input required="required" onChange={this.onInputChange}/>
                    <Button>Enter</Button>
                </form>
            </SignInDiv>
        );
    }
}

export default SignIn;
