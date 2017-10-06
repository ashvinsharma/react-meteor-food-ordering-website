import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {
    renderList() {
        return this.props.products.map(product => {
            return(
                <li className="list-group-item" key={product._id}>
                    {product.productName}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList.bind(this)}
            </ul>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, ProductsList)