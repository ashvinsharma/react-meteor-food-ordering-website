import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link, Switch} from 'react-router-dom'
import PrivateRoute from '../../account/private-route'
import FoodItems from './food-items'

class Products extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <Link className="links" to="/web-register/products/food-items"><ListGroupItem href="#">Food
                                Items</ListGroupItem></Link>
                            <ListGroupItem>Stock Control</ListGroupItem>
                            <ListGroupItem>Price Books</ListGroupItem>
                            <ListGroupItem>Item Types</ListGroupItem>
                            <ListGroupItem>Suppliers</ListGroupItem>
                            <ListGroupItem>Brands</ListGroupItem>
                            <ListGroupItem>Item Tags</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={10}>
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
