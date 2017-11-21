import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Orders} from '../../../../imports/collections/orders'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {BootstrapTable, ButtonGroup, TableHeaderColumn} from 'react-bootstrap-table'
import Sell from '../sell/sell'

class CustomerDashboard extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={10}>
                            <Sell/>
                        </Col>
                        <Col md={2}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default CustomerDashboard
