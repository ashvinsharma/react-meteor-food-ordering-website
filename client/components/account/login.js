import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'
import {Button, Form, FormControl, FormGroup, InputGroup, Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {withRouter} from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()

        this.state = {
            buttonDisabled: false
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({buttonDisabled: true})

        const email = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log('login unsuccessful ', err)
                this.setState({buttonDisabled: false})
            } else {
                console.log('login successful')
                console.log('userId is: ', Meteor.userId())
                if(Meteor.user().roles[1] === 'cook')
                    this.props.history.push(`/cook-dashboard`)
                else if (Meteor.user().roles[0] === 'customer') {
                    this.props.history.push('/customer-dashboard')
                }
                else
                    this.props.history.push(`/web-register`)
            }
        })
    }


    render() {
        return (
            <div className="login static-modal">
                <Modal.Dialog className="modal">
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Modal.Body>
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
                        </Modal.Body>
                        <Modal.Footer>
                            <LinkContainer className="links signup-btns" to={'/'}><Button>Close</Button></LinkContainer>
                            <Button className="signup-btns" bsStyle="primary"
                                    type="submit" disabled={this.state.buttonDisabled}>Login</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Dialog>
            </div>
        )
    }
}

export default withRouter(Login)
