import React, {Component} from 'react'
import {Accordion, Button, Checkbox, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../imports/collections/products'

class HomeComponents extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set()
    }

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

    toggleCheckbox = label => {
        console.log(this.selectedCheckboxes)
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label)
        } else {
            this.selectedCheckboxes.add(label)
        }
    }

    handleChange = formSubmitEvent => {
        formSubmitEvent.preventDefault()
        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.')
        }
    }
    render() {
        const products = this.props.products
        const Images = products.map((product) =>
            <li key={product._id}><Checkbox label={product.name} onChange={this.toggleCheckbox(product.name)}><img
                src={product.image} alt={product.name}/><br/>{product.name}</Checkbox></li>
        )
        return (
            <div className="home">
                <h1>Product List</h1>
                <Button onClick={this.handleChange.bind(this)}>Refs</Button>
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