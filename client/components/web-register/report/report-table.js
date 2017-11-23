import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Utilities from '../../../../imports/utils/utilities'

class ReportTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMounted: false
        }
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.props.orders}
                                keyField="items"
                >
                    <TableHeaderColumn dataField='items'
                                       editable={false}
                                       dataFormat={Utilities.showType}
                                       width={'50%'}
                    >Items</TableHeaderColumn>
                    <TableHeaderColumn dataField='createdAt'>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='bill'
                                       dataFormat={Utilities.formatMoney}
                    >Cost</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default ReportTable