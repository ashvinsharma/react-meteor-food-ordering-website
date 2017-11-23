// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Accordion, Button, ButtonGroup, Col, Grid, Panel, Row} from 'react-bootstrap'
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

    static addCurrency(cell) {
        if (typeof cell !== 'undefined') {
            return `₹ ${cell}`
        }
    }

    static addDiscountPercent(cell) {
        if (typeof cell !== 'undefined') {
            return `${cell} %`
        }
    }

    static handleEditCellDetails(row, cellName, cellValue) {
        Meteor.call('products.update', row, cellName, cellValue)
    }

    handleAddNewButtonClick() {
        this.setState({show: true})
    }

    handleCloseChild() {
        this.setState({show: false})
    }

    handleDeleteButtonClick() {
        if (JSON.stringify(this.state.selectedRow) !== '{}') {
            Meteor.call('products.remove', this.state.selectedRow)
        }
    }

    handleRowClick(row, isSelected) {
        if (isSelected) {
            this.setState({selectedRow: row})
        } else {
            this.setState({selectedRow: {}})
        }
    }

    static numericSortFunc(a, b, order) {
        if (order === 'desc') {
            return Number(a.price) - Number(b.price)
        } else {
            return Number(b.price) - Number(a.price)
        }
    }

    ToolBar = props => {
        return (
            <div >
                <Grid>
                    <Row>
                        <Col md={11}>
                            <ButtonGroup>
                                <Button bsStyle="success" onClick={this.handleAddNewButtonClick.bind(this)}>Add
                                    New</Button>
                                <Button bsStyle="danger"
                                        onClick={this.handleDeleteButtonClick.bind(this)}>Delete</Button>
                            </ButtonGroup>
                            {props.components.searchPanel}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    //if turned static images won't load
    // noinspection JSMethodCanBeStatic
    imageFormatter(cell) {
        return (<img style={{width: 72}} src={cell}/>)
    }

    render() {
        return (
            <div className="add_food">
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
                                            beforeSaveCell: ProductsList.handleEditCellDetails.bind(this)
                                        }}
                                        options={{
                                            toolBar: this.ToolBar.bind(this),
                                            clearSearch: true
                                        }}
                                        pagination>
                            <TableHeaderColumn dataField='_id'
                                               isKey
                                               dataSort={true}
                                               editable={false}
                                               searchable={false}
                                               hidden>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='image'
                                               dataFormat={this.imageFormatter}
                                               searchable={false}
                                               width={'10%'}
                            >Product Image</TableHeaderColumn>
                            <TableHeaderColumn dataField='name'
                                               dataSort={true}
                                               width={'20%'}
                            >Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'
                                               dataFormat={ProductsList.addCurrency.bind(this)}
                                               dataSort sortFunc={ProductsList.numericSortFunc.bind(this)}
                                               width={'10%'}
                            >Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='discount'
                                               dataFormat={ProductsList.addDiscountPercent.bind(this)}
                                               width={'10%'}
                            >Discount</TableHeaderColumn>
                        </BootstrapTable>
                    </Panel>
                </Accordion>
                <AddProduct show={this.state.show} callback={this.handleCloseChild.bind(this)}/>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')
    return {products: Products.find({}).fetch()}
}, ProductsList)
