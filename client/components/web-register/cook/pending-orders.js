import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'

class PendingOrders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRow: null,
        }
    }

    static showType(cell) {
        const items = cell.map((item) =>
            <li key={item._id}>{item.name}</li>
        )
        return (<ol>{items}</ol>)
    }


    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
        console.log(this.state.selectedRow)
    }

    handleAddButtonClick(row) {
        const assign = 'assignedTo'
        const status = 'Status'
        console.log(this.state.selectedRow)
        const rowUp = this.state.selectedRow
        rowUp.assignedTo = Meteor.userId()
        rowUp.Status = 'assigned'
        this.setState({
            selectedRow: rowUp
        })
        Meteor.call('orders.update', this.state.selectedRow, status, 'assigned')
        Meteor.call('orders.update', this.state.selectedRow, assign, Meteor.userId())
        console.log(this.state.selectedRow)
    }

    ToolBar = props => {
        return (
            <div className="orders">
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
        return (
            <div className="orders">
                <h1>Pending Orders</h1>
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
                                               editable={false}
                                               dataFormat={PendingOrders.showType}>Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedTo'>Assigned To</TableHeaderColumn>
                            <TableHeaderColumn dataField='bill'>bill</TableHeaderColumn>
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