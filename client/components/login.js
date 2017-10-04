import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Form,FormGroup,FormControl,InputGroup,Button, Modal } from 'react-bootstrap'

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
            <div className="login static-modal">
                <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                <Form >
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Username</InputGroup.Addon>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>
                        <FormControl.Feedback />
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Password</InputGroup.Addon>
                            <FormControl type="password" />
                        </InputGroup>
                    </FormGroup>
                </Form>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}