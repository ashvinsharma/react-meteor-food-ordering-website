import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'

class PendingOrders extends Component {
    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
    }

    handleAddButtonClick() {
        console.log('This is the selected row' + this.state.selectedRow)
        Meteor.call('orders.update', this.props.selectedRow._id, {$set: {assignedTo: Meteor.userId()}})
        Meteor.call('orders.update', this.props.selectedRow._id, {$set: {status: 'assigned'}})
    }

    ToolBar = props => {
        return (
            <div style={{margin: '15px'}}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <ButtonGroup>
                                <Button bsStyle="success" onClick={this.handleAddButtonClick.bind(this)}>Add To My
                                    Orders</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    render() {
        console.log(this.props.orders)
        return (
            <div className="orders">
                <h1>Pending Orders</h1>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders} keyField="name"
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
    return {orders: Orders.find({assignedTo: 'none'}).fetch()}
}, PendingOrders)