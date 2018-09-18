import React, {Component} from 'react';
import StoryTable from "./StoryTable";
import './css/style.css'
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmStoryDelete from "../../../modal/ConfirmStoryDelete";

class StoryArea extends Component {
    state={
        boardName: ''
    };
    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000);
        this.setState({boardName: localStorage.getItem('boardName')});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            boardName: window.sessionStorage.getItem("boardName")
        });
    }
    render() {
        return (
            <div id="storyArea">
                <div className="col-md-12 col-md-12 text-left no-top-padding">
                    <div className="title">{this.state.boardName}</div>
                    <div className="row">
                        <StoryTable />
                        <EditStory/>
                        <ConfirmStoryDelete/>
                        <CreateStory/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryArea;
