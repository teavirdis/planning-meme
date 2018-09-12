import React, {Component} from 'react';
import PlayArea from "./PlayArea";
import VoteArea from "./VoteArea";
import StoryTable from "./StoryTable";
import './css/style.css'
import EditStory from "../../../modal/EditStory";
import CreateStory from "../../../modal/CreateStory";
import ConfirmDelete from "../../../modal/ConfirmDelete";

class StoryArea extends Component {
    render() {
        return (
            <div id="storyArea">
                <div className="col-md-12 col-md-12 text-left no-top-padding">
                    <div className="title">Recent Stories</div>
                    <div className="row">
                        <PlayArea />
                        <VoteArea />
                        <StoryTable />
                        <EditStory/>
                        <CreateStory/>
                        <ConfirmDelete/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryArea;
