import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Orders} from '../../../../imports/collections/orders'
import ReportTable from './report-table'
import Graph from './graphs'


class Report extends Component {

    salesList2 = {
        date: [],
        sales: []
    }

    constructor(props) {
        let dates = new Set()
        super(props)
        this.state = {
            hasMounted: false,
            salesList: [],
            dates: dates
        }

    }

    createSaleslist() {
        let count = 0
        let ct = 0
        let cr = 0

        const something = this.props.orders.map((order) => {
            if (this.state.dates.has(order.createdAt.getDate())) {
                if (ct === 0) {
                    this.salesList2.sales[count] = 0
                    ct = 1
                }
                this.salesList2.date[count] = order.createdAt
                this.salesList2.sales[count] = Number.parseInt(this.salesList2.sales[count]) + Number.parseInt(order.bill)
            } else {
                count++
                this.setState(() => {
                        this.state.dates.add(order.createdAt.getDate())
                    }
                )
                if (cr === 0) {
                    this.salesList2.sales[count] = 0
                    cr = 1
                }
                this.salesList2.date[count] = order.createdAt
                this.salesList2.sales[count] = Number.parseInt(this.salesList2.sales[count]) + Number.parseInt(order.bill)
            }
        })

    }

    render() {
        return (
            <div>
                <Accordion>
                    <Panel header="Reports" eventKey="1">
                        <ReportTable orders={this.props.orders}/>
                    </Panel>
                    <Panel header="Growth" eventKey="2">
                        <Graph data={this.state.graphData}/>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('orders')
    return {orders: Orders.find({}, {sort: {createdAt: -1}}).fetch()}
}, Report)

