import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'

class HomeComponents extends Component {
    addOrders() {
        Meteor.call('orders.insert', {
            createdAt: new Date(),
            price: this.state.price,
            discount: this.state.discount,
            type: this.state.type,
            createdBy: Meteor.userId
        }, (err) => {
            if (err) {
                console.log('Order Unsuccessful')
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
            <li key={product._id}><img className="order" src={product.image} alt={'hell'}/>{product.name}</li>
        )
        //console.log(OrderList)
        return (
            <div>
                <h1>Product List</h1>
                <ul>{Images}</ul>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')
    return {products: Products.find({}).fetch()}
}, HomeComponents)