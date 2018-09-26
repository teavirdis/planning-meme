import React, {Component} from 'react';
import './css/style.css'
import BoardElement from "./BoardElement";
import BoardPagination from "./BoardPagination";
import axios from "axios";

class BoardTable extends Component {

    state = {
        pageNumber : 0,
        pageSize : 5
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 500);
        this.tick();
    }

    onInputPageNumberChange = (e) => this.setState({
        pageNumber: Number(e.target.text) - 1
    });

    tick() {
        axios.get(
            "/meme/users/current-user/boards?page="
            + this.state.pageNumber
            + "&pageSize="
            + this.state.pageSize )
            .then((response) => {
                this.props.onLoad(response.data.map(item =>
                    <BoardElement
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        startTime={item.startTime}
                        storiesCount={item.storiesCount} {...this.props} />
                ))
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row grayed-box-app">
                <table className="table table-hover table-boards">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hidden-xs">Time</th>
                        <th className="hidden-xs">Stories</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="text-left">
                    { this.props.boardList }
                    </tbody>
                </table>
                <BoardPagination pageSize={this.state.pageSize} pageNumberHandler={ this.onInputPageNumberChange } />
            </div>
        );
    }
}

export default BoardTable;
