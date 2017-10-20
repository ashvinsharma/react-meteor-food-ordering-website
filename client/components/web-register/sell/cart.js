import React, {Component} from 'react'
import {Accordion, Button, Col, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Orders} from '../../../../imports/collections/orders'

export default class Cart extends Component {
    addOrders(event) {
        event.preventDefault()

        Meteor.call('orders.insert', {
            createdAt: new Date(),
            items: Array.from(this.props.cart),
            createdBy: Meteor.userId
        }, (err) => {
            if (err) {
                console.log('Error Placing order')
            } else {
                console.log('Order Placed')
                this.close()
            }
        })
    }

    render() {
        console.log(this.props.cart)
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
                            <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
                <Button onClick={this.addOrders.bind(this)} bsStyle="success">Checkout</Button>
            </div>
        )
    }
}