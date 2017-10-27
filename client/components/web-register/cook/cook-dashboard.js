import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import PendingOrders from './pending-orders'
import MyOrders from './my-orders'
import CompletedOrders from './completed-orders'

export default class CookDashboard extends Component {
    render() {
        return (
            <Grid bsClass='container-fluid'>
                <Row>
                    <Col md={4}>
                        <PendingOrders/>
                    </Col>
                    <Col md={4}><MyOrders/></Col>
                    <Col md={4}><CompletedOrders/></Col>
                </Row>
            </Grid>
        )
    }
}