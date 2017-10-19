import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import {Switch, Redirect} from 'react-router-dom'

import PrivateRoute from '../account/private-route'
import FirstSidebar from './first-sidebar'
import Products from './products/products'
import SellBar from './sell/sell-bar'
import Home from './home'
import Setup from './setup/setup'


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
                                <PrivateRoute path={`${this.props.match.url}/products`} strict component={Products}/>
                                <PrivateRoute path={`${this.props.match.url}/sell-bar`} component={SellBar}/>
                                <PrivateRoute path={`${this.props.match.url}/setup`} strict component={Setup}/>
                                <PrivateRoute path={`${this.props.match.url}/home`} strict component={Home}/>
                                <PrivateRoute path={`${this.props.match.url}`} exact component={Home}/>
                                <Redirect to="/404"/>
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
