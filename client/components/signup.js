import React, {Component} from 'react'
import {Button, DropdownButton, Form, FormControl, FormGroup, InputGroup, MenuItem, Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userType: 1
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log(this.refs)

        const username = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()
        const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim()
        const userType = this.state.userType

        console.log(username, password, confirmPassword, userType)
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
                            console.log('Error tmklc', e)
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
            <div className="signup static-modal">
                <Modal.Dialog>
                    <Modal.Header>
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
                            <FormGroup>
                                <InputGroup>
                                    <DropdownButton title="User Type" id="dropdown-basic"
                                                    onSelect={e => this.setState({userType: e})}>
                                        <MenuItem eventKey="1" value="1">Admin</MenuItem>
                                        <MenuItem eventKey="2" value="2">Cashier</MenuItem>
                                    </DropdownButton>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link className="signup-btns" to={'/'}><Button>Close</Button></Link>
                        <Button className="signup-btns" bsStyle="primary"
                                onClick={this.handleSubmit.bind(this)}>SignUp</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
