import React, {Component} from 'react'
import {
    Button, OverlayTrigger, Modal, DropdownButton, Form, FormControl, FormGroup, InputGroup, MenuItem,
    ControlLabel
} from 'react-bootstrap'
import * as ReactDOM from 'react-dom'


export default class AddProduct extends Component {
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

    addProduct() {
        const productName = ReactDOM.findDOMNode(this.refs.name).value.trim()
        const productHandle = ReactDOM.findDOMNode(this.refs.handle).value.trim()
        const productDescription = ReactDOM.findDOMNode(this.refs.description).value.trim()
        const productType = this.state.productType
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
                            <FormControl ref="name" type="text" placeholder="Sample name"/>
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
                        <button onClick={this.addProduct.bind(this)}>Add Product</button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}