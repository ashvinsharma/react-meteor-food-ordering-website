import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'

class CompletedOrders extends Component {

    static showType(cell) {
        const items = cell.map((item) =>
            <li key={item._id}>{item.name}</li>
        )
        return (<ol>{items}</ol>)
    }

    render() {
        return (
            <div className="orders">
                <h1>Completed Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="items">
                            <TableHeaderColumn dataField='items'
                                               dataSort={true}
                                               dataFormat={CompletedOrders.showType}>Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='Status'>status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedToName'>Completed By</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('orders')
    return {orders: Orders.find({Status: 'completed'}).fetch()}
}, CompletedOrders)