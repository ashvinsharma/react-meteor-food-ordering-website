import React, {Component} from 'react'
import {Button, Form, FormControl, FormGroup, InputGroup, Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {withRouter} from 'react-router-dom'

class Signup extends Component {
    constructor() {
        super()

        this.state = {
            userType: 4 //Customer
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const username = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()
        const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim()
        const userType = this.state.userType

        if (password.length >= 6 && password === confirmPassword) {
            Accounts.createUser({
                username,
                password,
                profile: {
                    userType
                }
            }, (err) => {
                if (err) {
                    console.log('Error ', err)
                } else {
                    console.log('signup successful, login in ...')
                    Meteor.loginWithPassword(username, password, (e) => {
                        if (e) {
                            console.log('Error', e)
                        } else {
                            console.log('Login after Sign Up is successful')
                            this.props.history.push(`/web-register`)
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
            <div className="signup static-modal">
                <Modal.Dialog className="modal">
                    <Modal.Header className="signup header">
                        <Modal.Title>Signup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Username</InputGroup.Addon>
                                    <FormControl ref="username" type="text"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Password</InputGroup.Addon>
                                    <FormControl ref="password" type="password"/>
                                </InputGroup>
                            </FormGroup>
                            <FormControl.Feedback/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Confirm Password</InputGroup.Addon>
                                    <FormControl ref="confirmPassword" type="password"/>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="footer">
                        <LinkContainer className="links signup-btns" to={'/'}><Button>Close</Button></LinkContainer>
                        <Button className="signup-btns" bsStyle="primary"
                                onClick={this.handleSubmit.bind(this)}>SignUp</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default withRouter(Signup)
