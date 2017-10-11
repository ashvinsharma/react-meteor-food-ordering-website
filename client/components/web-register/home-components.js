import React, {Component} from 'react'
import {Accordion, Button, Checkbox, Col, Grid, Panel, Row} from 'react-bootstrap'
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
        const products = this.props.products
        const Images = products.map((product) =>
            <li key={product._id}><Checkbox><img src={product.image} alt={'hell'}/>{product.name}</Checkbox></li>
        )
        //console.log(OrderList)
        return (
            <div>
                <h1>Product List</h1>
                <form>
                    <ul className="order-items">
                        {Images}
                    </ul>
                </form>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')
    return {products: Products.find({}).fetch()}
}, HomeComponents)