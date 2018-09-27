import React, { Component } from 'react';
import './style/style.css'

class VoteArea extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="right-block">
                    <section>
                        <div className="players">Click "Start" to begin voting</div>
                        <div className="row row1 row-border">
                            <div className="col-xs-6 col-left">
                                <div className="players-text">Players:</div>
                            </div>
                            <div className="col-xs-6 col-right">
                                <div className="timer">
                                    <div><img className="clock-icon" src="https://planitpoker.azureedge.net/Content/clock.png" width="16" height="16"/><span className="ng-binding">00:00:00</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="players-list">
                            <div className="row row1">
                                <div className="role-player">
                                    <div className="avatar">
                                        <div className="img-border">
                                            <img src="https://www.planitpoker.com/profile/userimage/952398"/>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <span className="ng-binding">hgdn</span>
                                        <div className="stats">
                                            <span className="ng-scope">00:00:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="start-game ng-scope">
                        <button id="btn-start" className="btn btn-block btn-default btn-start">Start</button>
                    </section>
                </div>
            </div>
        );
    }
}

export default VoteArea;
