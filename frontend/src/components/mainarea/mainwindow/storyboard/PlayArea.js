import React, { Component } from 'react';
import './style/style.css'

class PlayArea extends Component {
    render() {
        return (
            <div className="col-md-8">
                <div className="page-board-vote">
                    <section className="playground text-center">
                        <div className="cards-block">
                            <ul className="cards">
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">0</div>
                                        <div className="center-icon ng-binding">0</div>
                                        <div className="right-icon ng-binding">0</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">½</div>
                                        <div className="center-icon ng-binding">½</div>
                                        <div className="right-icon ng-binding">½</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">1</div>
                                        <div className="center-icon ng-binding">1</div>
                                        <div className="right-icon ng-binding">1</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">2</div>
                                        <div className="center-icon ng-binding">2</div>
                                        <div className="right-icon ng-binding">2</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">3</div>
                                        <div className="center-icon ng-binding">3</div>
                                        <div className="right-icon ng-binding">3</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">5</div>
                                        <div className="center-icon ng-binding">5</div>
                                        <div className="right-icon ng-binding">5</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">8</div>
                                        <div className="center-icon ng-binding">8</div>
                                        <div className="right-icon ng-binding">8</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">13</div>
                                        <div className="center-icon ng-binding">13</div>
                                        <div className="right-icon ng-binding">13</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">20</div>
                                        <div className="center-icon ng-binding">20</div>
                                        <div className="right-icon ng-binding">20</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">40</div>
                                        <div className="center-icon ng-binding">40</div>
                                        <div className="right-icon ng-binding">40</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">100</div>
                                        <div className="center-icon ng-binding">100</div>
                                        <div className="right-icon ng-binding">100</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon ng-binding">?</div>
                                        <div className="center-icon ng-binding">?</div>
                                        <div className="right-icon ng-binding">?</div>
                                    </button>
                                </li>
                                <li className="ng-scope">
                                    <button className="ng-scope">
                                        <div className="left-icon">C</div>
                                        <div className="center-icon cofee">
                                            <img className="hover" src="https://planitpoker.azureedge.net/Content/cofee.png"/>
                                        </div>
                                        <div className="right-icon">C</div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default PlayArea;
