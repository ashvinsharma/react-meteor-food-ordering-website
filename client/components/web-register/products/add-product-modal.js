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
import {withRouter} from 'react-router-dom'
// noinspection ES6UnusedImports
import {Products} from '../../../../imports/collections/products'

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show,
            name: '',
            description: '',
            type: 0,
            image: '',
            price: 0,
            discount: 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({show: props.show})
    }

    close() {
        this.setState({show: false})
        this.props.callback()
    }

    addProduct(event) {
        event.preventDefault()

        if (this.state.name !== '' &&
            this.state.price !== 0 &&
            this.state.description !== '' &&
            this.state.type !== 0) {

            console.log(this.state.name,
                this.state.price,
                this.state.description,
                this.state.type)

            Meteor.call('products.insert', {
                createdAt: new Date(),
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
                price: this.state.price,
                quantity: 1,
                discount: this.state.discount,
                type: this.state.type,
                createdBy: Meteor.userId
            }, (err) => {
                if (err) {
                    console.log('Error while inserting the record')
                } else {
                    this.close()
                }
            })
        }
        else {
            console.error('empty fields')
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
                            <ControlLabel>Name</ControlLabel>
                            <FormControl ref="productName" type="text" placeholder="Sample name"
                                         onChange={e => this.setState({name: e.target.value.trim()})}/>

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl ref="description" componentClass="textarea" placeholder="textarea"
                                             onChange={e => this.setState({description: e.target.value.trim()})}/>
                            </FormGroup>

                            <ControlLabel>Image URL</ControlLabel>
                            <FormControl type="text" placeholder="Image URL"
                                         onChange={e => this.setState({image: e.target.value.trim()})}/>

                            <Form inline>
                                <FormGroup controlId="formControlsSelect">
                                    <FormGroup>
                                        <InputGroup>
                                            <DropdownButton title="Product Type" id="dropdown-basic"
                                                            onSelect={e => this.setState({type: e})}>
                                                <MenuItem eventKey="1" value="1">Item 1</MenuItem>
                                                <MenuItem eventKey="2" value="2">Item 2</MenuItem>
                                            </DropdownButton>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <ControlLabel>Product Price</ControlLabel>
                                        <FormControl ref="price" placeholder="Product Price"
                                                     onChange={e => {
                                                         this.setState({price: e.target.value.trim()})
                                                     }}/>
                                    </FormGroup>
                                </FormGroup>
                            </Form>

                            <ControlLabel>Starting Discount</ControlLabel>
                            <FormControl type="text" placeholder="Enter Discount"
                                         onChange={e => this.setState({discount: e.target.value.trim()})}/>
                        </FormGroup>

                        <Button onClick={this.addProduct.bind(this)} bsStyle="success">Add Product</Button>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withRouter(AddProduct)