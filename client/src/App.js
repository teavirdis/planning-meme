import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import MainArea from "./components/mainarea/MainArea";
import Footer from "./components/mainarea/footer/Footer";
import Route from "react-router/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

function Home() {
    return (
        <div>
            <NavigationBar/>
            <MainArea/>
            <Footer/>
        </div>
    );
}

class App extends Component {
    REACT_APP_ROUTER_BASE: "/meme";

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
