import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'
import {HomeComponents} from './home-components'

class Home extends Component {

    getProducts() {
        console.log('In getProducts')
        console.log(this.props)
        const products = this.props.products
        const Images = products.map((product) =>
            <li key={product._id}><img src={product.image} alt={'hell'}/>{product.name}</li>
        )
        const OrderList = Images.map((Image) =>
            <li key={products.id}><img src={Image}/></li>
        )
        console.log(OrderList)
        return (
            <div>
                <h1>Product List</h1>
            </div>
        )
    }

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
                    </Grid>
                </div>
                <HomeComponents/>
            </div>
        )
    }

}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, Home)