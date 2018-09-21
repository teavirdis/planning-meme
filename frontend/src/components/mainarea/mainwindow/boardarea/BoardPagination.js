import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";
import SignIn from "../../signin/SignIn";


const $ = window.jQuery;

class BoardPagination extends Component {

    state = {
        buttonList: []
    };

    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(), 3000);
        this.tick();
    }

    initializePagination(size){
        this.state.buttonList = [];
        for(let i=1; i <= Math.ceil(size/2); i++){
            this.state.buttonList.push(
                <li className="page-item">
                    <a className="page-link" onClick={this.props.pageNumberHandler}>{i}</a>
                </li>
            );
        }
    }

    tick() {
        let userId = SignIn.getCookie('userId');
        axios.get('http://localhost:8090/meme/users/'+userId)
            .then((response) => {
                this.initializePagination(response.data.countOfBoards)
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <ul className="pagination pagination-lg">
                {this.state.buttonList}
            </ul>
        );
    }
}

export default BoardPagination