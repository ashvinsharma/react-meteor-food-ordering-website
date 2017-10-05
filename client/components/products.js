import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Products extends Component {
    render() {
   // console.log(this.props)
        return (
            <div>
                <ListGroup>
                    <Link to="/web-register/products/fooditems"><ListGroupItem>Food Items</ListGroupItem></Link>
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