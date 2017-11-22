import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Orders} from '../../../../imports/collections/orders'

import Utilities from '../../../../imports/utils/utilities'

class CompletedOrders extends Component {
    render() {
        return (
            <div className="orders">
                <h1>Completed Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="items">
                            <TableHeaderColumn dataField='items'
                                               dataFormat={Utilities.showType}
                                               width={'50%'}
                            >Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'
                                               dataFormat={Utilities.formatStatus}
                            >Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedTo'
                                               dataFormat={Utilities.showAssignee}
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