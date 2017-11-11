// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
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

class FirstSidebar extends Component {
    constructor(props){
        super(props)
    }
    renderList() {
        return (
            <ListGroup className>
                <LinkContainer className="links" to="/web-register/home">
                    <ListGroupItem href="#">
                        <div className="icon1"><FaHome size={20}/></div>
                        Home
                    </ListGroupItem>
                </LinkContainer>

                <LinkContainer className="links" to="/web-register/sell">
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

                {this.props.user[0].roles[1] === 'admin' ? (
                    <LinkContainer className="links" to="/web-register/products">
                        <ListGroupItem href="#">
                            <div className="icon6"><FaProd size={20}/></div>
                            Products
                        </ListGroupItem>
                    </LinkContainer>) : <div/>}

                <ListGroupItem>
                    <div className="icon7"><FaGrp size={20}/></div>
                    Customers(TBD)
                </ListGroupItem>

                <ListGroupItem>
                    <div className="icon8"><FaCom size={20}/></div>
                    ECommerce(TBD)
                </ListGroupItem>

                {this.props.user[0].roles[1] === 'admin' ? (
                    <LinkContainer className="links" to="/web-register/accounts">
                        <ListGroupItem>
                            <div className="icon9"><FaSet size={20}/></div>
                            Setup
                        </ListGroupItem>
                    </LinkContainer>) : <div/>}

            </ListGroup>
        )
    }

    render() {
        if (this.props.user.length !== 0 && typeof this.props.user[0].roles !== 'undefined')
            if (this.props.user[0].roles[0] === 'staff')
                return <div>{this.renderList()}</div>
            else
                return <div/>
        else return <div/>
    }
}

export default FirstSidebar
