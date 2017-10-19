// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, Col, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Products} from '../../../../imports/collections/products'

class SellComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {cart: {}}
    }

    componentDidMount() {
        this.selectedCheckboxes = new Set()
        this.setState({cart: this.selectedCheckboxes})
    }

    addOrders() {
        Meteor.call('orders.insert', {
            createdAt: new Date(),
            items: Array.from(this.state.cart),
            createdBy: Meteor.userId
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
                        </Accordion>
                        <Button onClick={() => this.addOrders()}>Checkout</Button>
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