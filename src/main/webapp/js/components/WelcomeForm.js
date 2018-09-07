import React, {Component} from 'react'

class WelcomeForm extends Component {

    render() {
        return (
            <div>
                <input id="userName" type="text" placeholder="Your name"/>
                <button onClick={this.handleClick}>Send</button>
            </div>
        )
    }

    handleClick = () => {
		console.log('hi')
    }
}


export default WelcomeForm