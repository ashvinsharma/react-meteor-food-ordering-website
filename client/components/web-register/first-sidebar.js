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
import {LinkContainer} from 'react-router-bootstrap'

export default class FirstSidebar extends Component {
    render() {
        return (


            <ListGroup >
                <LinkContainer className="links" to="/web-register/home">
                    <ListGroupItem href="#">
                        <div className="icon1"><FaHome size={20}/></div>
                        Home
                    </ListGroupItem>
                </LinkContainer>

                <LinkContainer className="links" to="/web-register/sell-bar">
                    <ListGroupItem href="#">
                        <div className="icon2"><FaShop size={20}/></div>
                        Sell
                    </ListGroupItem>
                </LinkContainer>

                <LinkContainer className="links" to="/web-register/order">
                    <ListGroupItem href="#">
                        <div className="icon3"><FaCom size={20}/></div>
                        Orders
                    </ListGroupItem>
                </LinkContainer>

                <ListGroupItem>
                    <div className="icon4"><FaSale size={20}/></div>
                    Sales Ledger(TBD)
                </ListGroupItem>

                <ListGroupItem>
                    <div className="icon5"><FaLine size={20}/></div>
                    Reporting(TBD)
                </ListGroupItem>

                <LinkContainer className="links" to="/web-register/products">
                    <ListGroupItem href="#">
                        <div className="icon6"><FaProd size={20}/></div>
                        Products
                    </ListGroupItem>
                </LinkContainer>

                <ListGroupItem>
                    <div className="icon7"><FaGrp size={20}/></div>
                    Customers(TBD)
                </ListGroupItem>

                <ListGroupItem>
                    <div className="icon8"><FaCom size={20}/></div>
                    ECommerce(TBD)
                </ListGroupItem>

                <LinkContainer className="links" to="/web-register/setup">
                    <ListGroupItem>
                        <div className="icon9"><FaSet size={20}/></div>
                        Setup(In Process)
                    </ListGroupItem>
                </LinkContainer>

            </ListGroup>
        )
    }
}