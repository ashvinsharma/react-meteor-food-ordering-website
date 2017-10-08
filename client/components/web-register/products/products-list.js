// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'

class ProductsList extends Component {
    handleInsertRow(row) {
        console.log(row)
    }

    getProducts() {
        return (
            <BootstrapTable data={this.props.products}
                            insertRow={true}
                            search={true}
                            selectRow={{
                                mode: 'checkbox',
                                hideSelectColumn: true,
                                clickToSelect: true,
                                bgColor: 'grey'
                            }}
                            options={{
                                clearSearch: true,
                                afterInsertRow: this.handleInsertRow.bind(this)
                            }}
                            pagination>
                <TableHeaderColumn dataField='_id'
                                   isKey
                                   dataSort={true}
                                   width='10%'
                                   editable={false}
                                   hidden>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'
                                   dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='price'
                                   dataSort={true}>Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField='discount'>Discount</TableHeaderColumn>
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