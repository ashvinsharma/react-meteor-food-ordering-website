import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Products extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem>Type</ListGroupItem>
                                <ListGroupItem>Price</ListGroupItem>
                                <ListGroupItem>Sales </ListGroupItem>
                                <ListGroupItem>Tags</ListGroupItem>
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

export default Products