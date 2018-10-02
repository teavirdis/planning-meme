import React, {Component} from 'react';
import StartButton from "./StartButton";
import MemeUtil from "../../../../../util/MemeUtil";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isOn: false,
            start: 0
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
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
        this.setState({isOn: false});
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({time: 0, isOn: false});
        clearInterval(this.timer)
    }

    render() {
        let start = (this.state.time === 0)
            ? <div onClick={this.startTimer}><StartButton name={"Start voting"}/></div>
            : null;
        let stop = (this.state.time === 0 || !this.state.isOn)
            ? null
            : <div onClick={this.stopTimer}><StartButton name={"Finish voting"}/></div>;
        let reset = (this.state.time === 0 || !this.state.isOn)
            ? null
            : <div onClick={this.resetTimer}><StartButton name={"Reset"}/></div>;

        return (
            <div>
                <h3>Time: {MemeUtil.formatTime(this.state.time/1000)}</h3>
                {start}
                {stop}
                {reset}
            </div>
        )
    }
}

export default Timer;