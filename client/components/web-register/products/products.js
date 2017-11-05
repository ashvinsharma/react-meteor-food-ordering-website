import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Switch} from 'react-router-dom'
import PrivateRoute from '../../account/private-route'
import FoodItems from './food-items'
import {LinkContainer} from 'react-router-bootstrap'

class Products extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <LinkContainer className="links" to={`${this.props.match.url}/food-items`}><ListGroupItem href="#">Food
                                Items</ListGroupItem></LinkContainer>
                            <ListGroupItem>Stock Control</ListGroupItem>
                            <ListGroupItem>Price Books</ListGroupItem>
                            <ListGroupItem>Item Types</ListGroupItem>
                            <ListGroupItem>Suppliers</ListGroupItem>
                            <ListGroupItem>Brands</ListGroupItem>
                            <ListGroupItem>Item Tags</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <PrivateRoute path={`${this.props.match.url}/food-items`} strict component={FoodItems}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Products
