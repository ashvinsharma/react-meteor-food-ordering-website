import React, {Component} from 'react'
import {Button, Form, FormControl, FormGroup, InputGroup, Modal} from 'react-bootstrap'
import * as ReactDOM from 'react-dom'

export default class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: props.show,
            username: '',
            password: '',
            confirmPassword: '',
            userType: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState({show: props.show})
    }

    close(status) {
        this.setState({show: false})
        this.props.callback(status)
    }

    changePassword() {
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()
        const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim()
        if (password === confirmPassword && password.length >= 6) {
            Meteor.call('account.setPassword', this.props.row._id, password)
            this.close('pwd:success')
        }
    }

    render() {
        return (
            <div className="signup static-modal">
                <Modal
                    show={this.props.show}
                    className="modal">
                    <Modal.Header className="signup header">
                        <Modal.Title>Change Password | <i><strong>{this.props.row.username}</strong></i></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>

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
                        <Button onClick={this.close.bind(this)}>Close</Button>
                        <Button className="signup-btns" bsStyle="primary"
                                onClick={this.changePassword.bind(this)}
                        >Change Password</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}