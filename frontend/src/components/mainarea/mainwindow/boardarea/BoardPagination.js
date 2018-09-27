import React, {Component} from 'react';
import './style/style.css'
import axios from "axios";
import {BoardPaginationUl} from "./style/BoardAreaStyle";


class BoardPagination extends Component {

    state = {
        buttonList: []
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 500);
        this.tick();
    }

    initializePagination(size){
        let buttons = [];
        for(let i = 1; i <= Math.ceil(size/this.props.pageSize); i++){
            buttons.push(
                <li className="page-item">
                    <a className="page-link" onClick={this.props.pageNumberHandler}>{i}</a>
                </li>
            );
        }
        this.setState({
            buttonList: buttons.slice()
        })
    }

    tick() {
        axios.get('/meme/users/current-user/')
            .then((response) => {
                this.initializePagination(response.data.countOfBoards)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <BoardPaginationUl>{this.state.buttonList}</BoardPaginationUl>
        );
    }
}

export default BoardPagination