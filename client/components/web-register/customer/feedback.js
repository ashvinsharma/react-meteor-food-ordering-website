import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import ReactDOM from 'react-dom'
import {Accordion, Alert, Button, ControlLabel, FormControl, FormGroup, Panel} from 'react-bootstrap'
import {Feedbacks} from '../../../../imports/collections/feedback'

class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            orderID: null,
            feedback: '',
            feedbackSubmitted: false
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        Meteor.call('feedbacks.insert', {
            createdAt: new Date(),
            orderID: this.state.orderID,
            feedback: this.state.feedback,
            createdBy: Meteor.userId()
        }, (err) => {
            if (err) {
                console.log('Error while inserting the record')
            } else {
                this.setState({
                    feedbackSubmitted: true
                })
                this.areaForm.reset()
                this.close()
            }
        })
    }

    handleAlertDismiss() {
        this.setState({
            feedbackSubmitted: false
        })
    }


    showAlert() {
        if (this.state.feedbackSubmitted) {
            return (
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>Feedback Submitted</Alert>
            )
        }
    }


    render() {
        return (
            <div className="orders">
                <Accordion>
                    <Panel>
                        {this.showAlert()}
                        <form onSubmit={this.handleSubmit.bind(this)}
                              ref={(event) => {
                                  this.areaForm = event
                              }}
                        >
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>Order ID</ControlLabel>
                                <FormControl
                                    inputRef={input => this.orderId = input}
                                    type="text"
                                    placeholder="Enter your Order Id"
                                    onChange={e => this.setState({orderID: e.target.value.trim()})}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Feedback</ControlLabel>
                                <FormControl
                                    inputRef={input => this.feedback = input}
                                    componentClass="textarea" placeholder="Please provide your valuable feed back"
                                    onChange={e => this.setState({feedback: e.target.value.trim()})}
                                />
                            </FormGroup>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default Feedback