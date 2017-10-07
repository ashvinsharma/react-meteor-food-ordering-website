import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {
    getProducts() {
        return this.props.products.map((product) => {
            return (
                <BootstrapTable data={this.props.products} key={product._id}>
                    <TableHeaderColumn dataField='_id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='productName'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            )
        })
    }

    render() {
        return (
            <Accordion>
                <Panel>
                    {this.getProducts()}
                </Panel>
            </Accordion>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, ProductsList)