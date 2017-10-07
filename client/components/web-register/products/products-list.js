import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {
    getProducts() {
        return (
            <BootstrapTable data={this.props.products}>
                <TableHeaderColumn dataField='_id'
                                   isKey
                                   dataSort={true}
                                   width='10%'>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='productName'
                                   filter={{
                                       type: 'TextFilter',
                                       delay: 0
                                   }} dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'
                                   dataSort={true}>Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
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