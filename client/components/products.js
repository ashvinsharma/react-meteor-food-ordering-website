import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class Products extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Food Items</ListGroupItem>
                    <ListGroupItem>Stock Control</ListGroupItem>
                    <ListGroupItem>Price Books</ListGroupItem>
                    <ListGroupItem>Item Types</ListGroupItem>
                    <ListGroupItem>Suppliers</ListGroupItem>
                    <ListGroupItem>Brands</ListGroupItem>
                    <ListGroupItem>Item Tags</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Products