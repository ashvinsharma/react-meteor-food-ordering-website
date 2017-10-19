// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import SellComponents from './sell-components'

export default class Sell extends Component {

    render() {
        return (
            <div className="sell">
                <div className="sell-buttons">
                    <Grid bsClass="container">
                        <Row>
                            <Col md={10}>
                                <SellComponents/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>

        )
    }

}
