import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'

import Utilities from '../../../../imports/utils/utilities'
import {Orders} from '../../../../imports/collections/orders'


class MyOrders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRow: null,
        }
    }

    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
    }

    handleAddButtonClick() {
        const rowUp = this.state.selectedRow
        rowUp.status = 'completed'
        this.setState({
            selectedRow: rowUp
        })
        Meteor.call('orders.update', this.state.selectedRow, 'status', 'completed')
    }

    ToolBar = () => {
        return (
            <div style={{margin: '15px'}}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <ButtonGroup>
                                <Button bsStyle="success"
                                        onClick={this.handleAddButtonClick.bind(this)}>Completed</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <div className="orders">
                <h1>My Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="items"
                                        selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                        }}>
                            <TableHeaderColumn dataField='items'
                                               dataFormat={Utilities.showType}
                                               width={'50%'}
                            >Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'
                                               dataFormat={Utilities.formatStatus}>Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedTo'
                                               dataFormat={Utilities.showAssignee}
                            >Assigned To</TableHeaderColumn>
                            <TableHeaderColumn dataField='bill'
                                               dataFormat={Utilities.formatMoney}>Cost</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('orders')
    return {orders: Orders.find({assignedTo: Meteor.userId(), status: 'assigned'}).fetch()}
}, MyOrders)