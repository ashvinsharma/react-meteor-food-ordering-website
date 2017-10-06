import React, {Component} from 'react'
import {
    Button,
    ControlLabel,
    DropdownButton,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    MenuItem,
    Modal
} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
// noinspection ES6UnusedImports
import {Products} from '../../../../imports/collections/products'

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show,
            productType: 1
        }
    }

    componentWillReceiveProps(props) {
        this.setState({show: props.show})
    }

    close() {
        this.setState({show: false})
    }

    addProduct(event) {
        event.preventDefault()

        const productName = ReactDOM.findDOMNode(this.refs.productName).value.trim()
        const productHandle = ReactDOM.findDOMNode(this.refs.handle).value.trim()
        const productDescription = ReactDOM.findDOMNode(this.refs.description).value.trim()
        const productType = this.state.productType
        const productPrice = ReactDOM.findDOMNode(this.refs.price).value

        if (productName === '') {
            console.log(productName,
                productHandle,
                productDescription,
                productType)

            Meteor.call('products.insert', {
                createdAt: new Date(),
                productName: productName,
                description: productDescription,
                price: productPrice,
                createdBy: Meteor.userId
            }, (err) => {
                if (err) {
                    console.log('Error while inserting the record')
                } else {
                    this.setState({show: false})
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Item Name</ControlLabel>
                            <FormControl ref="productName" type="text" placeholder="Sample name"/>
                            <ControlLabel>Item Handle</ControlLabel>
                            <FormControl ref="handle" type="text" placeholder="Unique handle for the item"/>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl ref="description" componentClass="textarea" placeholder="textarea"/>
                            </FormGroup>
                            <Form inline>
                                <FormGroup controlId="formControlsSelect">
                                    <FormGroup>
                                        <InputGroup>
                                            <DropdownButton title="Product Type" id="dropdown-basic"
                                                            onSelect={e => this.setState({productType: e})}>
                                                <MenuItem eventKey="1" value="1">Item 1</MenuItem>
                                                <MenuItem eventKey="2" value="2">Item 2</MenuItem>
                                            </DropdownButton>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Product Price</ControlLabel>
                                        <FormControl ref="price" placeholder="Product Price"/>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </FormGroup>
                        <Button onClick={this.addProduct.bind(this)} bsStyle="success">Add Product</Button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withRouter(AddProduct)