import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Login extends Component {
    handleSubmit(e) {
        e.preventDefault()

        const email = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()

        console.log(email, password)
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log('login unsuccessful ', err)
            } else {
                console.log('login successful')
            }
        })
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="username" type="text" placeholder="Username"/>
                    <input ref="password" type="password" placeholder="Password"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}