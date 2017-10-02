import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login'
import Signup from './components/signup'

class App extends Component {
    render() {
        return (
            <div>
                <Login />
                <Signup />
                hi {Meteor.userId()}
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'))
})