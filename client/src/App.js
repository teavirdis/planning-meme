import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./components/navigation/NavigationBar";
import LoginNavigation from "./components/navigation/loginNavigation/LoginNavigation";
import MainArea from "./components/mainarea/MainArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
          <MainArea/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
