import React, {Component} from 'react';
import './style/style.css'
import BoardElement from "./BoardElement";
import BoardPagination from "./BoardPagination";
import axios from "axios";
import {Table, TableRow} from "../style/MainWindowStyle";

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
            <TableRow>
                <Table>
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
                </Table>
                <BoardPagination pageSize={this.state.pageSize} pageNumberHandler={ this.onInputPageNumberChange } />
            </TableRow>
        );
    }
}

export default BoardTable;
