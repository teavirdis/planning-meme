import React, {Component} from 'react';
import axios from 'axios';
import SignForm, {Button, H2, Input, SignDiv} from "./style/SignInStyle";

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: ''
    };

    static identifyCookieByName(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([.$?*|()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
        ));
       return matches ? decodeURIComponent(matches[1]).replace('|', ',') : undefined;
    }

    static deleteCookieByName(name) {
        document.cookie = name+"=; path=/; domain=.hanatrial.ondemand.com; expires=Session";
    }

    addUser = (e) => {
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
            <SignDiv>
                <SignForm onSubmit={this.addUser}>
                    <H2>Let's start!</H2>
                    <Input required="required"  placeholder="Enter your name" onChange={this.onInputChange}/>
                    <Button>Enter</Button>
                </SignForm>
            </SignDiv>
        );
    }
}

export default SignIn;
