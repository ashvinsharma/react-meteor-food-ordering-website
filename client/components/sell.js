import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link, Route, Switch} from 'react-router-dom'
import SellChild from './sell-child'

class Sell extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <Link to={`${this.props.match.url}/sell`}>
                                <ListGroupItem>Sell</ListGroupItem>
                            </Link>
                            <ListGroupItem>Open/Close (TBD)</ListGroupItem>
                            <ListGroupItem>Sale History (TBD)</ListGroupItem>
                            <ListGroupItem>Cash Management (TBD)</ListGroupItem>
                            <ListGroupItem>Status (TBD)</ListGroupItem>
                            <ListGroupItem>Setting (TBD)</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={10}>
                        <Switch>
                            <Route path={`${this.props.match.url}/sell`} component={SellChild}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Sell