import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import {Switch} from 'react-router-dom'
import PrivateRoute from '../account/private-route'
import FirstSidebar from './first-sidebar'
import Home from './home'
import Products from './products/products'
import Sell from './sell'
import Home from './home'


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
                                <PrivateRoute path={`${this.props.match.url}/home`} component={Home}/>
                                <PrivateRoute path={`${this.props.match.url}/products`} component={Products}/>
                                <PrivateRoute path={`${this.props.match.url}/sell`} component={Sell}/>
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
