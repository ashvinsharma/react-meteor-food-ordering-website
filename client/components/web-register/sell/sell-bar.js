import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Switch} from 'react-router-dom'
import PrivateRoute from '../../account/private-route'
import Sell from './sell'

class SellBar extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <LinkContainer className="links"
                                           to="/web-register/sell-bar/sell"><ListGroupItem>Sell</ListGroupItem></LinkContainer>
                            <ListGroupItem>Open/Close</ListGroupItem>
                            <ListGroupItem>Sale History</ListGroupItem>
                            <ListGroupItem>Cash Management</ListGroupItem>
                            <ListGroupItem>Status</ListGroupItem>
                            <ListGroupItem>Setting</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={10}>
                        <Switch>
                            <PrivateRoute path={`${this.props.match.url}/sell`} component={Sell}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SellBar