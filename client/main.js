import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './imports/startup/accounts-config.js'
import AccountsUIWrapper from './imports/ui/AccountsUIWrapper'

class App extends Component {
    render() {
        return (
            <div className="main">
                <AccountsUIWrapper/>
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'))
})