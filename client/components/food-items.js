import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class FoodItems extends Component {
    render() {
        return(
            <div className="food-item-add">
                <h1>Test</h1>
                <Button className="addproduct-button">Add Product</Button>
            </div>
        );
    }
}
