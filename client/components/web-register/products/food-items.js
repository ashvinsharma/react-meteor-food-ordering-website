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

    handleButtonClick() {
        this.setState({show: true})
    }

    render() {
        return (
            <div className="food-item-add">
                <Button className="addproduct-button" onClick={this.handleButtonClick.bind(this)}>Add Product</Button>
                <AddProduct show={this.state.show}/>
                <ProductsList/>
            </div>
        )
    }
}
