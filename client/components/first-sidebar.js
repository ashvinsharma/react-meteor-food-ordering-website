import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import FaSale from 'react-icons/lib/fa/clipboard'
import FaSet from 'react-icons/lib/fa/cog'
import FaGrp from 'react-icons/lib/fa/group'
import FaHome from 'react-icons/lib/fa/home'
import FaLine from 'react-icons/lib/fa/line-chart'
import FaCom from 'react-icons/lib/fa/money'
import FaShop from 'react-icons/lib/fa/shopping-cart'
import FaProd from 'react-icons/lib/fa/tags'
import {Link} from 'react-router-dom'
import List from './list'
import FoodItems from "./fooditems"

export default class FirstSidebar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem><FaHome/>Home(TBD)</ListGroupItem>
                                <Link to="/web-register/sell"><ListGroupItem><FaShop/> Sell</ListGroupItem></Link>
                                <ListGroupItem><FaSale/> Sales Ledger(TBD)</ListGroupItem>
                                <ListGroupItem><FaLine/> Reporting(TBD)</ListGroupItem>
                                <Link to="/web-register/products"><ListGroupItem><FaProd/>Products</ListGroupItem></Link>
                                <ListGroupItem><FaGrp/> Customers(TBD)</ListGroupItem>
                                <ListGroupItem><FaCom/> ECommerce(TBD)</ListGroupItem>
                                <ListGroupItem><FaSet/> Setup(TBD)</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={10}>
                            <Col md={2}>
                            <List secondList={this.props.param.param}/>
                            </Col>
                            <Col md={8}>
                                <List thirdList={this.props.param}/>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}