import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login/login'

class App extends Component {
    render() {
        return (
                <div><Login/></div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'))
})