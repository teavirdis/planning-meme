import React, { Component } from 'react';
import './css/style.css'
const $ = window.jQuery;

const divStyle = {
    padding: '0.25%',
    marginBottom: '-5px'
};

function goFromStoryToBoard(){
    $('#mainNavBar').show();
    $('#storyArea').hide();
    $('#boardArea').show();
}

class MainNavigation extends Component {
    state = {
        username: ''
    };
    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000);
        $("[name='collapseHref']").click(()=>{
            $(".collapse").collapse('hide');
            $('#mainNavBar').hide();
            $('#boardArea').hide();
            $('#storyArea').hide();
            $('#loginNavBar').show();
        });
        this.setState({username: localStorage.getItem('username')});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            username: window.sessionStorage.getItem("user")
        });
    }

    render() {
        return (
            <div id="mainNavBar">
                <ul className="nav navbar-nav navbar-right " style={divStyle}>
                    <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.state.username}<b
    className="caret"/></a>
                        <ul className="dropdown-menu">
                            {/*<li><a href="#">My Profile</a></li>*/}
                            <li><a href="#" onClick={goFromStoryToBoard}>Board</a></li>
                            <li className="divider"/>
                            <li><a className="signOut" href="#signIn" name="collapseHref" data-toggle="collapse">Sign Out</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#" onClick={goFromStoryToBoard}>Home</a></li>
                        {/*<li><a href="#about">About</a></li>*/}
                        {/*<li><a href="#contact">Contact</a></li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavigation;
