import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link, Route, Switch} from 'react-router-dom'
import FoodItems from './food-items'

class Products extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <Link to="/web-register/products/food-items"><ListGroupItem>Food
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
                            <Route path={`${this.props.match.url}/food-items`} component={FoodItems}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Products