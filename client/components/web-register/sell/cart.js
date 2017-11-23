import React, {Component} from 'react'
import {Accordion, Button, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import PrintTemplate from 'react-print'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        document.title = 'Foodlex'
        this.state = {
            time: new Date(),
            billPrice: 0
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
            _id: `${this.state.time.getSeconds()}${this.state.time.getMinutes()}${this.state.time.getHours()}${this.state.time.getFullYear()}${this.state.time.getMonth()}${this.state.time.getDate()}`,
            createdAt: new Date(),
            items: this.props.cart,
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
        this.setState({time: new Date(), billPrice: 0})
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
        const content = document.querySelector('.print-mount')
        const pri = document.getElementById('ifmcontentstoprint').contentWindow
        pri.document.open()
        pri.document.write(content.innerHTML)
        pri.document.close()
        pri.focus()
        pri.print()
    }

    renderFood() {
        let sum = 0
        return (<div>
            {this.props.cart.map((item) => {
                sum += parseInt(item.price)
                return (
                    <div key={item._id} className={'food-item'}
                         style={{width: '100%', float: 'left', padding: '10px 0 10px 0'}}>
                        <div style={{width: '75%', float: 'left', minWidth: '75%'}}>{item.name}</div>
                        <div style={{width: '25%', textAlign: 'right', float: 'left', minWidth: '25%'}}>
                            ₹{item.price}
                        </div>
                    </div>
                )
            })}
            <hr/>
            <div style={{width: '100%', height: '18.8889px'}}>
                <div style={{width: '75%', float: 'left', minWidth: '75%'}}><strong>Total</strong></div>
                <div style={{width: '25%', textAlign: 'right', float: 'left', minWidth: '25%'}}><strong>₹{sum}</strong>
                </div>
            </div>
        </div>)
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <Accordion>
                    <Panel>
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

                <div className={'print-mount'}>
                    <div style={{fontFamily: 'sans-serif'}}>
                        <div className={'header-line'}>
                            <img src={'/foodlex.png'} style={{width: 72}}/>
                            <div style={{float: 'right'}}>
                                <h1>Foodlex</h1>
                                <h6>Phone: 91 141 400 5858</h6>
                            </div>
                        </div>
                        <div className={'order-details'} style={{textAlign: 'right'}}>
                            <h6>
                                <div>
                                    Order ID:
                                    #{this.state.time.getSeconds()}{this.state.time.getMinutes()}{this.state.time.getHours()}
                                    {this.state.time.getFullYear()}{this.state.time.getMonth()}{this.state.time.getDate()}
                                </div>
                                <div>
                                    Created
                                    On: {this.state.time.getDate()}/{this.state.time.getMonth()}/{this.state.time.getFullYear()}
                                    &nbsp;
                                    {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
                                </div>
                            </h6>
                        </div>
                        <hr/>
                        <div>
                            <div style={{width: '75%', float: 'left', minWidth: '75%'}}><strong>Product</strong></div>
                            <div style={{width: '25%', textAlign: 'right', float: 'left', minWidth: '25%'}}>
                                <strong>Amount</strong>
                            </div>
                        </div>
                        <hr/>
                        {this.renderFood()}
                        <hr/>
                    </div>
                </div>

                <PrintTemplate>
                    <div className={'print-mount'}>
                        <div style={{fontFamily: 'sans-serif'}}>
                            <div className={'header-line'}>
                                <img src={'/foodlex.png'} style={{width: 72}}/>
                                <div style={{float: 'right'}}>
                                    <h1>Foodlex</h1>
                                    <h6>Phone: 91 141 400 5858</h6>
                                </div>
                            </div>
                            <div className={'order-details'} style={{textAlign: 'right'}}>
                                <h6>
                                    <div>
                                        Order ID:
                                        #{this.state.time.getSeconds()}{this.state.time.getMinutes()}{this.state.time.getHours()}
                                        {this.state.time.getFullYear()}{this.state.time.getMonth()}{this.state.time.getDate()}
                                    </div>
                                    <div>
                                        Created
                                        On: {this.state.time.getDate()}/{this.state.time.getMonth()}/{this.state.time.getFullYear()}
                                        &nbsp;
                                        {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
                                    </div>
                                </h6>
                            </div>
                            <hr/>
                            <div>
                                <div style={{width: '75%', float: 'left', minWidth: '75%'}}><strong>Product</strong>
                                </div>
                                <div style={{width: '25%', textAlign: 'right', float: 'left', minWidth: '25%'}}>
                                    <strong>Amount</strong>
                                </div>
                            </div>
                            <hr/>
                            {this.renderFood()}
                            <hr/>
                        </div>
                    </div>
                </PrintTemplate>
            </div>
        )
    }
}