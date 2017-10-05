import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import FirstSidebar from './first-sidebar'
import Products from './products'
import Sell from './sell'
import Grid from 'react-bootstrap/es/Grid'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'

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
                                <Route path={`${this.props.match.url}/products`} component={Products}/>
                                <Route path={`${this.props.match.url}/sell`} component={Sell}/>
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}