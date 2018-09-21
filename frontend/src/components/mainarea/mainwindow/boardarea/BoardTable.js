import React, {Component} from 'react';
import './css/style.css'
import BoardElement from "./BoardElement";
import BoardPagination from "./BoardPagination";
import axios from "axios";
import SignIn from "../../signin/SignIn";

class BoardTable extends Component {

    state = {
        pageNumber : 0,
        pageSize : 2,
    };

    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(), 3000);
        this.tick();
    }

    onInputPageNumberChange = (e) => this.setState({
        pageNumber: Number(e.target.text) - 1
    });

    tick() {
        console.log(this.state.pageNumber);
        let userId = SignIn.getCookie('userId');
        axios.get(
            "/meme/users/"
            + userId
            + "/boards?page="
            + this.state.pageNumber
            + "&pageSize="
            + this.state.pageSize )
            .then((response) => {
                this.setState({
                    listItems: response.data.map(item =>
                        <BoardElement
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            startTime={item.startTime}
                            storiesCount={item.storiesCount} />
                    )
                })
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
                    {this.state.listItems}
                    </tbody>
                </table>
                <BoardPagination pageSize={this.state.pageSize} pageNumberHandler={ this.onInputPageNumberChange}/>
            </div>
        );
    }
}

export default BoardTable;
