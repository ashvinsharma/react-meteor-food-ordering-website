import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import {Redirect, Switch} from 'react-router-dom'

import PrivateRoute from '../account/private-route'
import FirstSidebar from './first-sidebar'
import Home from './home'
import OrderList from './orders'
import FoodItems from './products/food-items'
import Sell from './sell/sell'
import Accounts from './setup/accounts'


export default class WebRegister extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <FirstSidebar param={this.props.match.params.param}/>
                        </Col>
                        <Col md={10}>
                            <Switch>
                                <PrivateRoute path={`${this.props.match.url}/products`} strict component={FoodItems}/>
                                <PrivateRoute path={`${this.props.match.url}/sell`} component={Sell}/>
                                <PrivateRoute path={`${this.props.match.url}/accounts`} strict component={Accounts}/>
                                <PrivateRoute path={`${this.props.match.url}/home`} strict component={Home}/>
                                <PrivateRoute path={`${this.props.match.url}`} exact component={Home}/>
                                <PrivateRoute parth={`${this.props.match.url}/orders`} strict component={OrderList}/>
                                <Redirect to="/404"/>
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
