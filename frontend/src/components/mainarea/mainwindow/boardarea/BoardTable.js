import React, {Component} from 'react';
import './css/style.css'
import BoardElement from "./BoardElement";
import axios from "axios";

class BoardTable extends Component {

    state ={
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
    }

    tick() {
        axios.get('http://localhost:8081/meme/boards?page=0&pageSize=10')
            .then((response) => {
                this.setState({
                    listItems: response.data.map(item =>
                        <BoardElement
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            startTime={item.startTime}
                            storiesCount={item.storiesCount}/>
                    )})})
            .catch(error => {
                alert(error);
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
            </div>
        );
    }
}

export default BoardTable;
