import React, {Component} from 'react';
import StartButton from "./StartButton";
import MemeUtil from "../../../../../util/MemeUtil";
import {BOARD_URL_REGEX} from "../../../../../util/TextConstant";
import axios from "axios";
import $ from 'jquery';


class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: 0,
            isOn: false,
            time: 0,
            result: null
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.loadStory = this.loadStory.bind(this);
        this.refreshTimer = this.refreshTimer.bind(this);

        this.loadStory();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location != prevProps.location) {
            this.loadStory();
            this.refreshTimer();
            console.log("load stypty");
        } else {
            if (this.state.start != 0 && this.timer == undefined) {
                console.log("else inner");
                this.timer = setInterval(() => this.setState({
                    time: Date.now() - this.state.start
                }), 1000);
            }
        }
    }

    refreshTimer() {
        clearInterval(this.timer);
        this.setState({
            start: 0,
            isOn: false
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    loadStory() {
        let boardId = MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href);
        axios.get(
            "/meme/users/current-user/boards/"
            + boardId
            + "/stories/"
            + this.props.match.params.storyId)
            .then(response => {
                if (response.data.finishTime === undefined) {
                    this.setState({
                        start: new Date(response.data.startTime),
                        isOn: true
                    });
                }
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now()
        });

        let boardId = MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href);
        let updStory = { setStartTime: true };
        axios.put("/meme/users/current-user/boards/"
            + boardId
            + "/stories/"
            + this.props.match.params.storyId, updStory)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            });

        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }

    stopTimer() {
        this.setState({
            isOn: false,
            result: $('.filterImg').attr('alt')
        });
        clearInterval(this.timer);

        let boardId = MemeUtil.findIdByUrl(BOARD_URL_REGEX, window.location.href);
        let updStory = {
            setFinishTime: true,
            estimation: $('.filterImg').attr('alt')
        };
        axios.put("/meme/users/current-user/boards/"
            + boardId
            + "/stories/"
            + this.props.match.params.storyId, updStory)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    render() {
        let start = (this.state.time === 0)
            ? <div onClick={this.startTimer}><StartButton name={"Start voting"}/></div>
            : null;
        let stop = (this.state.time === 0 || !this.state.isOn)
            ? null
            : <div onClick={this.stopTimer}><StartButton name={"Finish voting"}/></div>;
        let result = (!this.state.isOn && this.state.start > 0)
            ? <div><i>Your vote: </i><b>{this.state.result}</b></div>
            : null;
        return (
            <div>
                <h3>Time: {MemeUtil.formatTime(this.state.time/1000)}</h3>
                {start}
                {stop}
                {result}
            </div>
        )
    }
}

export default Timer;
