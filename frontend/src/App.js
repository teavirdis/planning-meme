import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import MainArea from "./components/mainarea/MainArea";
import Footer from "./components/mainarea/footer/Footer";
import Route from "react-router/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false};
        this.handleAuthStatusChange = this.handleAuthStatusChange.bind(this);
    }

    handleAuthStatusChange() {
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn
        }));
    }

    render () {
        return (
            <div>
                <NavigationBar onAuthStateChange={this.handleAuthStatusChange} isLoggedIn={this.state.isLoggedIn}/>
                <MainArea onAuthStateChange={this.handleAuthStatusChange} isLoggedIn={this.state.isLoggedIn}/>
                <Footer/>
            </div>
        )
    };
}

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter basename={'/meme'}>
                    <Route path='/' component={Home} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
