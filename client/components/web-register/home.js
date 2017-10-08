import React, {Component} from 'react'
import {Button, Col, Grid, Row} from 'react-bootstrap'
import ProductsList from './products/products-list'

export default class Home extends Component {
    render() {
        return (
            <div className="home-buttons">
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={3}>
                            <div className="home-buttons-order">
                                <h3>Place Your Orders Here</h3>
                                <Button>Place Order</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Products List</h1>
                        <ProductsList/>
                    </Row>
                </Grid>
            </div>
        )

    }

}
