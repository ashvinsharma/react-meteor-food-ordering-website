import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'

export default class FirstSidebar extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem>Home</ListGroupItem>
                                <ListGroupItem>Sell</ListGroupItem>
                                <ListGroupItem>Sales Ledger</ListGroupItem>
                                <ListGroupItem>Reporting</ListGroupItem>
                                <ListGroupItem>Products</ListGroupItem>
                                <ListGroupItem>Customers</ListGroupItem>
                                <ListGroupItem>ECommerce</ListGroupItem>
                                <ListGroupItem>Setup</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}