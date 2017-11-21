import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'


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
            <li key={item._id}>{item.name}-{item.quantity}</li>
        )
        return (<ol>{items}</ol>)
    }

    static showName(cell) {
        const name = Meteor.user().username
        return name
    }

    handleAddButtonClick(row) {
        const status = 'Status'
        const rowUp = this.state.selectedRow
        rowUp.assignedTo = Meteor.userId()
        rowUp.assignedToName = Meteor.user().username
        rowUp.Status = 'completed'
        this.setState({
            selectedRow: rowUp
        })
        Meteor.call('orders.update', this.state.selectedRow, status, 'completed')
    }

    ToolBar = props => {
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
                                               dataFormat={MyOrders.showType}>Items</TableHeaderColumn>
                            <TableHeaderColumn dataField='Status'>status</TableHeaderColumn>
                            <TableHeaderColumn dataField='assignedToName'>Assigned To</TableHeaderColumn>
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
    return {orders: Orders.find({assignedTo: Meteor.userId()}).fetch()}
}, MyOrders)