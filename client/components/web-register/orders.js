import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Orders} from '../../../imports/collections/orders'

class OrderList extends Component {

    handleDeleteButtonClick() {
        if (JSON.stringify(this.state.selectedRow) !== '{}') {
            Meteor.call('orders.remove', this.state.selectedRow)
        }
    }

    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
    }

    ToolBar = () => {
        return (
            <div style={{margin: '15px'}}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <ButtonGroup>
                                <Button bsStyle="danger"
                                        onClick={this.handleDeleteButtonClick.bind(this)}>Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    render() {
        const orders = this.props.orders
        const productNames = orders.map((order) => {
            return (
                order.items.map((item) => {
                    return (
                        <li>{item.name}</li>
                    )
                })
            )
        })
        const deleteButton = orders.map((order) => {
            return (
                <Button bsStyle="danger"
                        onClick={this.handleDeleteButtonClick.bind(this)}>Del</Button>
            )
        })
        return (
            <div>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.orders}
                                        selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                            clearSearch: true
                                        }}
                                        pagination>
                            <TableHeaderColumn dataField='_id'
                                               isKey
                                               dataSort={true}
                                               width='10%'
                                               editable={false}
                            >Order ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdBy'>User</TableHeaderColumn>
                            <TableHeaderColumn dataField='bill'>Amount</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('orders')
    return {orders: Orders.find({}).fetch()}
}, OrderList)
