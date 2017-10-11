import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'
import HomeComponents from './home-components'

class Home extends Component {

    render() {
        return (
            <div>
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
                            <HomeComponents/>
                        </Row>
                    </Grid>
                </div>
            </div>

        )
    }

}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, Home)