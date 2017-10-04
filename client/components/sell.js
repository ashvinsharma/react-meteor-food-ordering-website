import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Sell extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem>Type</ListGroupItem>
                                <ListGroupItem>Price</ListGroupItem>
                                <ListGroupItem>Sales sell </ListGroupItem>
                                <ListGroupItem>Tags</ListGroupItem>
                                /<Link to="/products"><ListGroupItem>Products</ListGroupItem></Link>
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

export default Sell