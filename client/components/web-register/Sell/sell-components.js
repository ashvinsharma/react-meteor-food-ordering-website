import React, {Component} from 'react'
import {Accordion, Button, Checkbox, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
import {Products} from '../../../../imports/collections/products'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class SellComponents extends Component {
    componentDidMount() {
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

    addToCart(product) {
        if (this.selectedCheckboxes.has(product)) {
            this.selectedCheckboxes.delete(product)
            console.log(product.name + ' is deleted from the cart')
        }
        else {
            this.selectedCheckboxes.add(product)
            console.log(product.name + ' is added to the cart')
        }
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
                        <Col md={11}>
                            <h1>Product List</h1>
                            <form>
                                <ul className="order-items">
                                    {Images}
                                </ul>
                            </form>
                        </Col>
                    </div>
                    <Col md={1}>
                        <h1>Cart</h1>
                        <Accordion>
                            <Panel>
                                <BootstrapTable data={this.selectedCheckboxes} keyField="image">
                                    <TableHeaderColumn dataField='image'
                                                       dataFormat={this.imageFormatter}>Product
                                        Image</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name'
                                                       dataSort={true}>Product Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                                    <TableHeaderColumn dataField='price'
                                                       dataSort={true}>Product Price</TableHeaderColumn>
                                    <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
                                </BootstrapTable>
                            </Panel>
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