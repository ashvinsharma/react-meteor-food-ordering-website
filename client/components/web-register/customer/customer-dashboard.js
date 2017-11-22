import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'
import Sell from '../sell/sell'
import Feedback from './feedback'

class CustomerDashboard extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={10}>
                            <Sell/>
                        </Col>
                        <Col md={2}>
                            <Feedback/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default CustomerDashboard
