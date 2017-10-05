import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Sell extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Type</ListGroupItem>
                    <ListGroupItem>Price</ListGroupItem>
                    <ListGroupItem>Sales sell </ListGroupItem>
                    <ListGroupItem>Tags</ListGroupItem>
                    <Link to="/products"><ListGroupItem>Products</ListGroupItem></Link>
                    <ListGroupItem>Customers</ListGroupItem>
                    <ListGroupItem>ECommerce</ListGroupItem>
                    <ListGroupItem>Setup</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Sell