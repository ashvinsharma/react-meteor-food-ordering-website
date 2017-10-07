import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {
    getProducts() {
        this.getProducts2()
        return this.props.products.map(product => {
            return (
                <div>
                    <li className="list-group-item" key={product._id}>
                        {product.productName}
                    </li>
                </div>
            )
        })
    }

    getProducts2() {
        //console.log(this.props.products);
        const Products = []
        const length = this.props.products.length
        for (let i = 0; i < length; i++) {
            Products.push({
                id: this.props.products[i]._id,
                name: this.props.products[i].productName,
                description: this.props.products[i].description,
                price: this.props.products[i].price
            })
        }
        console.log(Products)
        return (
            <BootstrapTable data={Products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                <TableHeaderColumn dataField="Price">Price</TableHeaderColumn>
            </BootstrapTable>
        )

    }


    render() {
        return (
            <Accordion>
                <Panel>
                    {this.getProducts2()}
                </Panel>
            </Accordion>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, ProductsList)