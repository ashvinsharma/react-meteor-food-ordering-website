import React, {Component} from 'react'

import ProductsList from './products-list'


export default class FoodItems extends Component {
    render() {
        return (
            <div className="food-item-add">
                <ProductsList/>
            </div>
        )
    }
}
