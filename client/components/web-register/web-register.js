// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import {Redirect, Switch} from 'react-router-dom'

import PrivateRoute from '../account/private-route'
import FirstSidebar from './first-sidebar'
import OrderList from './orders'
import ProductsList from './products/products'
import Sell from './sell/sell'
import Accounts from './setup/accounts'
import Report from './report/reports'


class WebRegister extends Component {
    render() {
        if (typeof this.props.user !== 'undefined')
            return (
                <div>
                    <Grid bsClass="container-fluid">
                        <Row>
                            <Col md={2}>
                                <FirstSidebar param={this.props.match.params.param} user={this.props.user}/>
                            </Col>
                            <Col md={10}>
                                <Switch>
                                    <PrivateRoute path={`${this.props.match.url}/products`} strict
                                                  component={ProductsList}/>
                                    <PrivateRoute path={`${this.props.match.url}/sell`} component={Sell}/>
                                    <PrivateRoute path={`${this.props.match.url}/accounts`} strict
                                                  component={Accounts}/>
                                    <PrivateRoute parth={`${this.props.match.url}/reports`} strict
                                                  component={Report}/>
                                    <PrivateRoute parth={`${this.props.match.url}/orders`} strict
                                                  component={OrderList}/>
                                    <Redirect to="/404"/>
                                </Switch>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
    }
}

export default createContainer(() => {
    Meteor.subscribe('users')
    return {user: Meteor.users.find({_id: Meteor.userId()}).fetch()}
}, WebRegister)
