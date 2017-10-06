import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AddProduct from './add-product-modal'


export default class FoodItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show:false
        }
    }
    open(){
        this.setState({show: true})
    }
    render() {
        return(
            <div className="food-item-add">
                <h1>Test</h1>
                <Button className="addproduct-button" onClick={this.open.bind(this)}>Add Product</Button>
                <AddProduct show={this.state.show}/>
            </div>
        );
    }
}
