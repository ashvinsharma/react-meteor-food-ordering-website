import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login'
import Signup from './components/signup'

class App extends Component {
    render() {
        if (Meteor.userId()) {
            return (
                <div> hi {Meteor.userId()}
                </div>
            )
        } else {
            return (
                <div>
                    <Login/>
                    <Signup/>
                </div>
            )
        }
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'))
})