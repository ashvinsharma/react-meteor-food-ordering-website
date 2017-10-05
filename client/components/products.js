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
                            <Link to={`${this.props.match.url}/food-items`}>
                                <ListGroupItem>Food Items</ListGroupItem>
                            </Link>
                            <ListGroupItem>Stock Control (TBD)</ListGroupItem>
                            <ListGroupItem>Price Books (TBD)</ListGroupItem>
                            <ListGroupItem>Item Types (TBD)</ListGroupItem>
                            <ListGroupItem>Suppliers (TBD)</ListGroupItem>
                            <ListGroupItem>Brands (TBD)</ListGroupItem>
                            <ListGroupItem>Item Tags (TBD)</ListGroupItem>
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