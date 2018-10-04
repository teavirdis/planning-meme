import React, {Component} from 'react';
import StartButton from "./StartButton";
import MemeUtil from "../../../../../util/MemeUtil";
import $ from 'jquery';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isFinish: false,
            isOn: false,
            start: 0,
            result: null
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        window.scrollTo(0,document.body.scrollHeight);
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        });


        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer() {
        this.setState({
            isOn: false,
            isFinish: true,
            result: $('.filterImg').attr('alt')
        });
        clearInterval(this.timer);
    }

    render() {
        let start = (this.state.time === 0)
            ? <div onClick={this.startTimer}><StartButton name={"Start voting"}/></div>
            : null;
        let stop = (this.state.time === 0 || !this.state.isOn)
            ? null
            : <div onClick={this.stopTimer}><StartButton name={"Finish voting"}/></div>;
        let result = (this.state.isFinish)
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