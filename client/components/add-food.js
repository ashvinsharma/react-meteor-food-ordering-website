import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class AddFood extends Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FieldGroup id={'food-name'}
                                    type={'text'}
                                    label={'Food Name'}
                                    placehoder={'food-name'}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}