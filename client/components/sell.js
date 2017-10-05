import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Sell extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Sell</ListGroupItem>
                    <ListGroupItem>Open/Close</ListGroupItem>
                    <ListGroupItem>Sale History</ListGroupItem>
                    <ListGroupItem>Cash Management</ListGroupItem>
                    <ListGroupItem>Status</ListGroupItem>
                    <ListGroupItem>Setting</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Sell