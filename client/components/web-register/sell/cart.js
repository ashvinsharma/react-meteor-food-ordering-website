import React, {Component} from 'react'
import {Accordion, Button, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {billPrice: 0}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cart !== this.props.cart) {
            var price = 0
            const items = nextProps.cart
            items.map((item) => {
                price = price + Number.parseInt(item.price)
            })
            this.setState({billPrice: price})
        }
    }


    addOrders(event) {
        event.preventDefault()

        Meteor.call('orders.insert', {
            createdAt: new Date(),
            items: this.state.cart,
            bill: this.state.billPrice,
            status: 'pending',
            assignedTo: 'none',
            createdBy: Meteor.user().username
        }, (err) => {
            if (err) {
                console.log('Error Placing order')
            } else {
                console.log('Order Placed')
                this.close()
            }
        })
        this.setState({billPrice: 0})
        this.props.emptyCart()


    }

    Quantity(cell) {
        let quantity = 1
        return (
            <div>
                <Button onClick={() => {
                    quantity--
                }}>-</Button>
                <div>{quantity}</div>
                <Button onClick={() => {
                    quantity++
                }}>+</Button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.cart} keyField="name">
                            <TableHeaderColumn dataField='name'
                                               dataSort={true}>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'
                                               dataSort={true}>Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity'
                                               dataFormat={this.Quantity.bind(this)}
                            >Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
                <h3>Billing amount</h3>
                <h3>{this.state.billPrice}</h3>
                <Button onClick={this.addOrders.bind(this)} bsStyle="success">Checkout</Button>
            </div>
        )
    }
}