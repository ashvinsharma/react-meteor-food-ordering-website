import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Orders} from '../../../imports/collections/orders'

class OrderList extends Component {
    static parseCook(cell){
        return cell[1].charAt(0).toUpperCase() + cell[1].slice(1)
    }

    static parseList(cell) {
        const items = cell.map((item) =>
            <li key={item._id}>{item.name}</li>
        )
        return (<ol>{items}</ol>)
    }

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

    static formatMoney(cell) {
        return `₹ ${cell}`
    }

    render() {
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
                            <TableHeaderColumn dataField={'items'}
                                               dataFormat={OrderList.parseList}
                            >Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='bill'
                                               dataFormat={OrderList.formatMoney}
                                               width={'10%'}
                            >Amount</TableHeaderColumn>
                            <TableHeaderColumn dataField={'assignedTo'}
                                               dataFormat={OrderList.parseCook}
                                               width={'10%'}
                            >Served By</TableHeaderColumn>
                            <TableHeaderColumn dataField='createdBy'
                                               width={'10%'}
                            >Received By</TableHeaderColumn>
                            <TableHeaderColumn dataField={'createdAt'}
                                               width={'25%'}
                            >Date Ordered</TableHeaderColumn>
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
