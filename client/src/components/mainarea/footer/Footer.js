import React, {Component} from 'react';
const divStyle = {
    background:'#545454',
    color:'darkgray',
    padding:'1% 0 0 0'
};

class Footer extends Component {
    render() {
        return (
            <div className="navbar-fixed-bottom row-fluid">
                <div className="navbar-inner" style={divStyle}>
                    <div className="container">
                        <p className="text-center">
                            <small>&copy; 2018 Planning Meme</small>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;
