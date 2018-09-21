import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";


const $ = window.jQuery;

class BoardPagination extends Component {

    state = {
        buttonList: []
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
    }

    initializePagination(size){
        this.state.buttonList = [];
        for(let i=1; i <= Math.ceil(size/this.props.pageSize); i++){
            this.state.buttonList.push(
                <li className="page-item">
                    <a className="page-link" onClick={this.props.pageNumberHandler} href="#">{i}</a>
                </li>
            );
        }
    }

    tick() {
        let userId = sessionStorage.getItem("userId");
        axios.get('/meme/users/'+userId)
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