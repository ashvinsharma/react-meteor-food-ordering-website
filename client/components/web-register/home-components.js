import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'

class HomeComponents extends Component {
    addOrders() {
        Meteor.call('orders.insert', {
            createdAt: new Date(),
            user: Meteor.userId(),
            image: this.state.image,
            price: this.state.price,
            discount: this.state.discount,
            type: this.state.type,
            createdBy: Meteor.userId
        }, (err) => {
            if (err) {
                console.log('Error while inserting the record')
            } else {
                this.close()
            }
        })
    }

    render() {
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
}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, HomeComponents)