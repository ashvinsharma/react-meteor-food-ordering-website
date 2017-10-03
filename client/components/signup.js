import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmPassword: '',
            userType: 1
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const username = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()
        const confirmPassword = this.state.confirmPassword
        const userType = this.state.userType

        console.log(username, password, confirmPassword, userType)
        if (password.length > 6 && password === confirmPassword) {
            Accounts.createUser({
                username: username,
                password: password,
                profile: {
                    userType: userType
                }
            }, (err) => {
                if (err) {
                    console.log('Error ', err)
                } else {
                    console.log('signup successful, login in ...')
                    Meteor.loginWithPassword(username, password, (e) => {
                        if (e) {
                            console.log('Error ', e)
                        } else {
                            console.log('Login after Sign Up is successful')
                        }
                    })
                }
            })
        } else {
            console.log('Passwords didn\'t match or character length is less than 6')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="username" type="text" placeholder="Username"/>
                    <input ref="password" type="password" placeholder="Password"/>
                    <input onChange={e => this.setState({
                            confirmPassword: e.target.value.trim()
                        }
                    )} type="password" placeholder="Confirm Password"/>
                    <select name="You're ..." onChange={e => this.setState({
                            userType: e.target.value
                        }
                    )}>
                        <option value="1">Admin</option>
                        <option value="2">Cashier</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}