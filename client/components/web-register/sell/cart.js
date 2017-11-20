import React, {Component} from 'react'
import {Accordion, Alert, Button, Col, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Orders} from '../../../../imports/collections/orders'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            billPrice: 0,
            orderPlace: false
        }
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
            items: this.props.cart,
            bill: this.state.billPrice,
            Status: 'pending',
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
        this.setState({billPrice: 0, orderPlace: true})
        this.props.emptyCart()
    }

    handleAlertDismiss() {
        this.setState({
            billPrice: 0,
            orderPlace: false
        })
    }

    showAlert() {
        if (this.state.orderPlace) {
            return (
                <Alert bsStyle={'success'} onDismiss={this.handleAlertDismiss.bind(this)}>Order Placed!</Alert>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <Accordion>
                    <Panel>
                        {this.showAlert()}
                        <BootstrapTable data={this.props.cart} keyField="name">
                            <TableHeaderColumn dataField='name'
                                               dataSort={true}>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'
                                               dataSort={true}>Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='Quantity'
                                               dataSort={true}>Quantity</TableHeaderColumn>
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