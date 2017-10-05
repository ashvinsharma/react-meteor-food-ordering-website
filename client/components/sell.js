import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'

class Sell extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <ListGroupItem>Sell</ListGroupItem>
                            <ListGroupItem>Open/Close</ListGroupItem>
                            <ListGroupItem>Sale History</ListGroupItem>
                            <ListGroupItem>Cash Management</ListGroupItem>
                            <ListGroupItem>Status</ListGroupItem>
                            <ListGroupItem>Setting</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Sell