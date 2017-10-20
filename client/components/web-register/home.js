import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'

export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-buttons">
                    <Grid bsClass="container">
                        <Row>
                            <Col md={3}>
                                <div className="home-buttons-order">
                                    <h2>Make a Sale</h2>
                                    <Button>Sell</Button>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="home-buttons-order">
                                    <h2>Add a Product</h2>
                                    <Button>Add Product</Button>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="home-buttons-order">
                                    <h2>Add a Customer</h2>
                                    <Button>Add Customer</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>
                </div>
            </div>

        )
    }

}
