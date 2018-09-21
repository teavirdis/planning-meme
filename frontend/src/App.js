import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import MainArea from "./components/mainarea/MainArea";
import Footer from "./components/mainarea/footer/Footer";
import { Route, Redirect, Switch } from "react-router-dom";
import BoardArea from "./components/mainarea/mainwindow/boardarea/BoardArea";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <NavigationBar onAuthStateChange={ this.props.onAuthStateChange }
                               isLoggedIn={ this.props.isLoggedIn } />
                <Footer/>
            </div>
        )
    };
}

class App extends Component {

    constructor(props) {
        super(props);

        let status = window.localStorage.getItem("isLoggedIn");
        if (status === "true") {
            this.state = {isLoggedIn: true};
        } else {
            this.state = {isLoggedIn: false};
        }
        this.handleAuthStatusChange = this.handleAuthStatusChange.bind(this);
    }

    componentDidMount() {

    }

    handleAuthStatusChange() {
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn
        }));
        window.localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    }

    render() {
        return (
            <div>
                <Route path="/"
                       render={() => <Home onAuthStateChange={ this.handleAuthStatusChange }
                                           isLoggedIn={ this.state.isLoggedIn } /> } />
                {this.state.isLoggedIn
                    ?
                    <Switch>
                        <Route exact path="/boards"
                               render={() => <BoardArea onAuthStateChange={ this.handleAuthStatusChange }
                                                        isLoggedIn={ this.state.isLoggedIn } /> }>
                            <Route path="">

                            </Route>
                        </Route>
                        <Redirect from="/" to="/boards" />
                    </Switch>
                    :
                    <Switch>
                        <Route path="/sign-in"
                               render={() => <MainArea onAuthStateChange={ this.handleAuthStatusChange }
                                                       isLoggedIn={ this.state.isLoggedIn } /> } />
                        <Redirect from="/" to="/sign-in" />
                    </Switch>
                }
            </div>
        );
    }
}

export default App;