import React, {Component} from 'react'
import {Button, Col, Grid, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'

class Home extends Component {

    handleRowSelect() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="home-buttons">
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={3}>
                            <div className="home-buttons-order">
                                <h3>Place Your Orders Here</h3>
                                <Button onClick={this.handleRowSelect.bind(this)}>Place Order</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Products List</h1>
                    </Row>
                </Grid>
            </div>
        )

    }

}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, Home)