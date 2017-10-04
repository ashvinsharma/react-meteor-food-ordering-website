import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class FirstSidebar extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem>Home</ListGroupItem>
                                <ListGroupItem>Sell</ListGroupItem>
                                <ListGroupItem>Sales Ledger</ListGroupItem>
                                <ListGroupItem>Reporting</ListGroupItem>
                                <Link to="/products"><ListGroupItem>Products</ListGroupItem></Link>
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