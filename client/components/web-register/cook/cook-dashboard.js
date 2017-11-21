import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import CompletedOrders from './completed-orders'
import MyOrders from './my-orders'
import PendingOrders from './pending-orders'

export default class CookDashboard extends Component {
    render() {
        return (
            <Grid bsClass='container-fluid'>
                <Row>
                    <Col md={4}><PendingOrders/></Col>
                    <Col md={4}><MyOrders/></Col>
                    <Col md={4}><CompletedOrders/></Col>
                </Row>
            </Grid>
        )
    }
}