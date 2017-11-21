import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'
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

    static showType(cell) {
        const items = cell.map((item) =>
            <li key={item._id}>{item.name}</li>
        )
        return (<ol>{items}</ol>)
    }

    static showAssignee(cell) {
        return cell[1].charAt(0).toUpperCase() + cell[1].slice(1)
    }

    static formatStatus(cell){
        return cell.charAt(0).toUpperCase() + cell.slice(1)
    }

    static formatMoney(cell){
        return `₹ ${cell}`
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
                                               dataFormat={MyOrders.showType}
                                               width={'50%'}
                            >Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='status'
                                               dataFormat={MyOrders.formatStatus}>Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedTo'
                                               dataFormat={MyOrders.showAssignee}
                            >Assigned To</TableHeaderColumn>
                            <TableHeaderColumn dataField='bill'
                                               dataFormat={MyOrders.formatMoney}>Cost</TableHeaderColumn>
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