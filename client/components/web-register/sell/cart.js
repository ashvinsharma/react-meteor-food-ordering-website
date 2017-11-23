import React, {Component} from 'react'
import {Accordion, Alert, Button, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        document.title = 'Foodlex'
        this.state = {
            cart: this.props.cart,
            billPrice: 0,
            orderPlace: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cart !== this.props.cart) {
            let price = 0
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
            //todo: WHAT THE FUCK IS THIS??!?!?!?
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

    quantity() {
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

    static printInvoice() {
        const content = document.querySelector('.divcontents')
        const pri = document.getElementById('ifmcontentstoprint').contentWindow
        pri.document.open()
        pri.document.write(content.innerHTML)
        pri.document.close()
        pri.focus()
        pri.print()
    }

    renderFood() {
        return this.props.cart.map((item) => {
            console.log(item)
            return <li key={item._id}>{item.name}</li>
        })
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
                                               dataSort={true}
                            >Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'
                                               dataSort={true}
                            >Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity'
                                               dataFormat={this.quantity.bind(this)}
                            >Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
                <h3>Billing amount</h3>
                <h3>{this.state.billPrice}</h3>
                <Button onClick={this.addOrders.bind(this)} bsStyle="success">Checkout</Button>
                <Button onClick={Cart.printInvoice.bind(this)} bsStyle={'success'}>Print</Button>
                <iframe id="ifmcontentstoprint" style={{height: 0, width: 0, position: 'absolute'}}/>

                <div className={'divcontents'}>
                    <div className={'printable'}>
                        <img src={'/foodlex.png'} style={{width: 72}}/> <h1 className={'pull-right'}>Foodlex</h1>
                    </div>
                    {this.renderFood()}
                </div>
            </div>
        )
    }
}