import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FaHome from 'react-icons/lib/fa/home'
import FaShop from 'react-icons/lib/fa/shopping-cart'
import FaSale from 'react-icons/lib/fa/clipboard'
import FaLine from 'react-icons/lib/fa/line-chart'
import FaProd from 'react-icons/lib/fa/tags';
import FaGrp from 'react-icons/lib/fa/group'
import FaCom from  'react-icons/lib/fa/money'
import FaSet from 'react-icons/lib/fa/cog'
import List from './list'

export default class FirstSidebar extends Component {
    render() {
        return (
            <div>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col md={2}>
                            <ListGroup>
                                <ListGroupItem><FaHome />  Home</ListGroupItem>
                                <Link to="/web-register/sell"><ListGroupItem><FaShop/> Sell</ListGroupItem></Link>
                                <ListGroupItem><FaSale/> Sales Ledger</ListGroupItem>
                                <ListGroupItem><FaLine/> Reporting</ListGroupItem>
                                <Link to="/web-register/products"><ListGroupItem><FaProd/> Products</ListGroupItem></Link>
                                <ListGroupItem><FaGrp/> Customers</ListGroupItem>
                                <ListGroupItem><FaCom/> ECommerce</ListGroupItem>
                                <ListGroupItem><FaSet/> Setup</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={2}>
                            //TODO: change this name
                            <List idk={this.props.param.param}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
    )
    }
    }