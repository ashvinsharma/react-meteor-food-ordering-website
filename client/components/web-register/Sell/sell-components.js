import React, {Component} from 'react'
import {Accordion, Button, Checkbox, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../../imports/collections/products'
import {Orders} from '../../../../imports/collections/orders'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class SellComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {cart: {}}
        console.log('State defined ' + this.state.cart)
    }
    componentDidMount() {
        this.selectedCheckboxes = new Set()
        this.setState({cart: this.selectedCheckboxes})
        console.log('Set Defined ' + Array.from(this.state.cart))
    }

    addOrders() {
        Meteor.call('orders.insert', {
            createdAt: new Date(),
            items: Array.from(this.state.cart),
            createdBy: Meteor.userId
        }, (err) => {
            if (err) {
                console.log('Order Unsuccessful' + err)
            } else {
                console.log('Order Successful')
                this.close()
            }
        })
    }

    addToCart(product) {
        if (this.state.cart.has(product)) {
            this.state.cart.delete(product)
            console.log(product.name + ' is deleted from the cart')
        }
        else {
            this.state.cart.add(product)
            console.log(product.name + ' is added to the cart')
        }
        console.log(Array.from(this.state.cart))
    }

    imageFormatter(cell, row) {
        return (<img style={{width: 50}} src={cell}/>)
    }

    render() {
        const products = this.props.products
        const Images = products.map((product) => {
            return (
                <li className="order-items" key={product._id}>
                    <Button className="btn btn-primary" onClick={() => this.addToCart(product)}>
                        <img src={product.image} alt={product.name}/>
                        <br/>{product.name}
                        <br/>{product.price}
                    </Button>
                </li>
            )
        })
        return (
            <div className="home">
                <Row>
                    <div className="place-order">
                        <Col md={7}>
                            <h1>Product List</h1>
                            <form>
                                <ul className="order-items">
                                    {Images}
                                </ul>
                            </form>
                        </Col>
                    </div>
                    <Col md={5}>
                        <h1>Cart</h1>
                        <Accordion>
                            <Panel>
                                <BootstrapTable data={Array.from(this.state.cart)} keyField="name">
                                    <TableHeaderColumn dataField='name'
                                                       dataSort={true}>Product Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                                    <TableHeaderColumn dataField='price'
                                                       dataSort={true}>Product Price</TableHeaderColumn>
                                    <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
                                </BootstrapTable>
                            </Panel>
                            <Button onClick={() => this.addOrders()}>Checkout</Button>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')
    return {products: Products.find({}).fetch()}
}, SellComponents)