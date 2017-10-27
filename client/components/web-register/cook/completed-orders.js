import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'

class CompletedOrders extends Component {


    render() {
        console.log(this.props.orders)
        return (
            <div className="orders">
                <h1>Completed Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="name"
                        >
                            <TableHeaderColumn dataField='items'
                                               dataSort={true}>Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'>status</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('orders')
    return {orders: Orders.find({status: 'completed'}).fetch()}
}, CompletedOrders)