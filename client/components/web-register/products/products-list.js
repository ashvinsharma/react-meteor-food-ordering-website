// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Panel} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

import {Products} from '../../../../imports/collections/products'
import AddProduct from './add-product-modal'

class ProductsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRow: {},
            show: false,
        }
    }

    handleAddNewButtonClick() {
        this.setState({show: true})
    }

    handleEditCellDetails(row, cellName, cellValue) {
        Meteor.call('products.update', row, cellName, cellValue)
    }

    handleDeleteButtonClick() {
        if(JSON.stringify(this.state.selectedRow) !== '{}'){
            Meteor.call('products.remove', this.state.selectedRow)
        }
    }

    handleRowClick(row, isSelected, e) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
        console.log(this.state.selectedRow)
    }

    ToolBar = props => {
        return (
            <div style={{margin: '15px'}}>
                <div className='col-xs-8 col-sm-12 col-md-12 col-lg-12'>
                    <ButtonGroup>
                        <Button bsStyle="success" onClick={this.handleAddNewButtonClick.bind(this)}>Add New</Button>
                        <Button bsStyle="danger"
                                onClick={this.handleDeleteButtonClick.bind(this)}>Delete</Button>
                    </ButtonGroup>
                    {props.components.searchPanel}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Accordion>
                    <Panel>
                        <BootstrapTable data={this.props.products}
                                        search={true}
                                        selectRow={{
                                            mode: 'radio',
                                            hideSelectColumn: true,
                                            bgColor: 'grey',
                                            clickToSelectAndEditCell: true,
                                            onSelect: this.handleRowClick.bind(this)
                                        }}
                                        cellEdit={{
                                            mode: 'dbclick',
                                            blurToSave: false,
                                            beforeSaveCell: this.handleEditCellDetails.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                            clearSearch: true,
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
                    </Panel>
                </Accordion>
                <AddProduct show={this.state.show}/>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')

    return {products: Products.find({}).fetch()}
}, ProductsList)