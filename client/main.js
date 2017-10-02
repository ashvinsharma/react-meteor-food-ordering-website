import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './imports/startup/accounts-config.js'
import AccountsUIWrapper from './imports/ui/AccountsUIWrapper'
import HomeScreen from './imports/ui/homescreen'

class App extends Component {
    render() {
        return (
            <div>
                <div className="accounts-ui-wrapper">
                    <AccountsUIWrapper/>
                </div>
                <HomeScreen/>
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'))
})