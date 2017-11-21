import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Orders} from '../../../../imports/collections/orders'

class CompletedOrders extends Component {
    static showAssignee(cell) {
        return cell[1].charAt(0).toUpperCase() + cell[1].slice(1)
    }

    static showType(cell) {
        const items = cell.map((item) =>
            <li key={item._id}>{item.name}</li>
        )
        return (<ol>{items}</ol>)
    }

    static showStatus(cell) {
        return cell.charAt(0).toUpperCase() + cell.slice(1)
    }

    render() {
        return (
            <div className="orders">
                <h1>Completed Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="items">
                            <TableHeaderColumn dataField='items'
                                               dataFormat={CompletedOrders.showType}
                                               width={'50%'}
                            >Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'
                                               dataFormat={CompletedOrders.showStatus}
                            >Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedTo'
                                               dataFormat={CompletedOrders.showAssignee}
                            >Completed By</TableHeaderColumn>
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