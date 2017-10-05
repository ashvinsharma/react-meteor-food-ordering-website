import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'
import {Button, Form, FormControl, FormGroup, InputGroup, Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

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
                console.log(Meteor.userId())

            }
        })
    }


    render() {
        return (
            <div className="login static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Username</InputGroup.Addon>
                                    <FormControl ref="username" type="text"/>
                                </InputGroup>
                            </FormGroup>
                            <FormControl.Feedback/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Password</InputGroup.Addon>
                                    <FormControl ref="password" type="password"/>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link className="signup-btns" to={'/'}><Button>Close</Button></Link>
                        <Button className="signup-btns" bsStyle="primary"
                                onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
