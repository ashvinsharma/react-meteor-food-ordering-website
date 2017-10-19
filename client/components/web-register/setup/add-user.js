import React, {Component} from 'react'
import {Button, Col, Form, FormControl, FormGroup, Grid, InputGroup, Modal, Radio, Row} from 'react-bootstrap'
import ReactDOM from 'react-dom'

export default class AddUser extends Component {
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

    static handleSubmit(e) {
        e.preventDefault()

        const username = ReactDOM.findDOMNode(this.refs.username).value.trim()
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim()
        // noinspection JSCheckFunctionSignatures
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
                            this.close()
                        }
                    })
                }
            })
        } else {
            console.log('Passwords didn\'t match or character length is less than 6')
        }
    }

    close() {
        this.setState({show: false})
        this.props.callback()
    }

    radioChange(event) {
        this.setState({userType: event.target.value})
    }

    render() {
        return (
            <div className="signup static-modal">
                <Modal
                    show={this.props.show}
                    className="modal">
                    <Modal.Header className="signup header">
                        <Modal.Title>Add User</Modal.Title>
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

                        <Grid>
                            <Row>
                                <FormGroup onChange={this.radioChange.bind(this)}>
                                    <Col md={3}>
                                        <Radio value={'Admin'} name="user-type">Admin</Radio>
                                        <Radio value={'Cashier'} name="user-type">Cashier</Radio>
                                    </Col>
                                    <Col md={3}>
                                        <Radio value={'Cook'} name="user-type">Cook</Radio>
                                        <Radio value={'Customer'} name="user-type">Customer</Radio>
                                    </Col>
                                </FormGroup>
                            </Row>
                        </Grid>

                    </Modal.Body>

                    <Modal.Footer className="footer">
                        <Button onClick={this.close.bind(this)}>Close</Button>
                        <Button className="signup-btns" bsStyle="primary"
                                onClick={AddUser.handleSubmit.bind(this)}>SignUp</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}