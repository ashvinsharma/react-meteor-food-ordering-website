import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import List from './list'

export default class FirstSidebar extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem>Home</ListGroupItem>
                                <Link to="/web-register/sell"><ListGroupItem>Sell</ListGroupItem></Link>
                                <ListGroupItem>Sales Ledger</ListGroupItem>
                                <ListGroupItem>Reporting</ListGroupItem>
                                <Link to="/web-register/products"><ListGroupItem>Products</ListGroupItem></Link>
                                <ListGroupItem>Customers</ListGroupItem>
                                <ListGroupItem>ECommerce</ListGroupItem>
                                <ListGroupItem>Setup</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={2}>
                            <List idk={this.props.param.param}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
    )
    }
    }