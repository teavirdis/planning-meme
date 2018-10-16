import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import MainArea from "./components/mainarea/MainArea";
import Footer from "./components/mainarea/footer/Footer";
import { Route, Redirect, Switch } from "react-router-dom";
import BoardArea from "./components/mainarea/mainwindow/boardarea/BoardArea";
import StoryArea from "./components/mainarea/mainwindow/storyboard/StoryArea";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <NavigationBar {...this.props} />
                <Footer/>
            </div>
        )
    };
}

class App extends Component {

    constructor(props) {
        super(props);
        let status = window.localStorage.getItem("isLoggedIn");
        this.state = {
            isLoggedIn: status === "true" ? true : false,
            webSocketSession: null
        }
        this.handleWebSocketSessionConnected = this.handleWebSocketSessionConnected.bind(this);
        this.handleAuthStatusChange = this.handleAuthStatusChange.bind(this);
    }


    handleAuthStatusChange() {
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn
        }));
        window.localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    }

    handleWebSocketSessionConnected = (e) =>{
        this.setState(state=>({
            webSocketSession: e
        }));
    }

    render() {
        return (
            <div>
                <Route path="/"
                       render={(props) => <Home onAuthStateChange={ this.handleAuthStatusChange }
                                                isLoggedIn={ this.state.isLoggedIn }
                                                webSocketSession = {this.state.webSocketSession} { ...props } /> } />
                {

                this.state.isLoggedIn ?
                    <Switch>
                        <Route exact={true} path="/boards"
                               render={(props) => <BoardArea { ...props } /> }/>
                        <Route path="/boards/:boardId/stories"
                               render={(props) => <StoryArea webSocketSession = {this.state.webSocketSession} {...props}/>} />
                        <Redirect to="/boards" />
                    </Switch>
                    :
                    <Switch>
                        <Route exact={true} path="/sign-in"
                               render={(props) => <MainArea onAuthStateChange={ this.handleAuthStatusChange }
                                                            isLoggedIn={ this.state.isLoggedIn }
                                                            onWebSocketSessionConnected = {this.handleWebSocketSessionConnected} { ...props } /> } />
                        <Redirect from="/" to="/sign-in" />
                    </Switch>
                }
            </div>
        );
    }
}

export default App;