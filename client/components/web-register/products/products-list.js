// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {

    handleRowSelect(row, isSelected, e) {
        //this.props.onSelectProduct(row, isSelected, e)
        console.log(this.props)
        console.log(row)
        console.log(isSelected)
        console.log(e)
    }
    getProducts() {
        const selectRow = {
            mode: 'checkbox',
            hideSelectColumn: true,
            valueField: 'product',
            clickToSelect: true,
            bgColor: 'grey',
            onSelect: this.handleRowSelect
        }
        return (
            <BootstrapTable data={this.props.products}
                            selectRow={selectRow}
                            pagination>
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