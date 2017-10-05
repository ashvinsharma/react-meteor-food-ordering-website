import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class Products extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Type</ListGroupItem>
                    <ListGroupItem>Price</ListGroupItem>
                    <ListGroupItem>Sales </ListGroupItem>
                    <ListGroupItem>Tags</ListGroupItem>
                    <ListGroupItem>Customers</ListGroupItem>
                    <ListGroupItem>ECommerce</ListGroupItem>
                    <ListGroupItem>Setup</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Products