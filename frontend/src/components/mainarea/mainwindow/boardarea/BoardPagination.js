import React, {Component} from 'react';
import './css/style.css'
import axios from "axios";


class BoardPagination extends Component {

    state = {
        buttonList: []
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
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
            <ul className="pagination pagination-lg">
                {this.state.buttonList}
            </ul>
        );
    }
}

export default BoardPagination