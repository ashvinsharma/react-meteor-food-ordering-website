import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import FaSale from 'react-icons/lib/fa/clipboard'
import FaSet from 'react-icons/lib/fa/cog'
import FaGrp from 'react-icons/lib/fa/group'
import FaHome from 'react-icons/lib/fa/home'
import FaLine from 'react-icons/lib/fa/line-chart'
import FaCom from 'react-icons/lib/fa/money'
import FaShop from 'react-icons/lib/fa/shopping-cart'
import FaProd from 'react-icons/lib/fa/tags'
import {Link} from 'react-router-dom'

export default class FirstSidebar extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem><FaHome/>Home(TBD)</ListGroupItem>
                <Link to="/web-register/sell"><ListGroupItem href="#"><FaShop/> Sell</ListGroupItem></Link>
                <ListGroupItem><FaSale/> Sales Ledger(TBD)</ListGroupItem>
                <ListGroupItem><FaLine/> Reporting(TBD)</ListGroupItem>
                <Link to="/web-register/products"><ListGroupItem href="#"><FaProd/>Products</ListGroupItem></Link>
                <ListGroupItem><FaGrp/> Customers(TBD)</ListGroupItem>
                <ListGroupItem><FaCom/> ECommerce(TBD)</ListGroupItem>
                <ListGroupItem><FaSet/> Setup(TBD)</ListGroupItem>
            </ListGroup>
        )
    }
}