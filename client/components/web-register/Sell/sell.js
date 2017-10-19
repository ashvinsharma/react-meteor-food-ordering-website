import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'
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
