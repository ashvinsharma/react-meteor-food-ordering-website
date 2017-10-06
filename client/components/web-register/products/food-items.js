import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

import AddProduct from './add-product-modal'
import ProductsList from './products-list'


export default class FoodItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    open() {
        this.setState({show: true})
    }

    render() {
        return (
            <div className="food-item-add">
                <h1>Test</h1>
                <Button className="addproduct-button" onClick={this.open.bind(this)}>Add Product</Button>
                <AddProduct show={this.state.show}/>
                <ProductsList/>
            </div>
        )
    }
}
