import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Sell from './sell'
import Products from './products'

class List extends Component{

    render(){
        if(this.props.match.params.parent === "sell"){
            return(<Sell/>)
        }
        if(this.props.match.params.parent === "products"){
            return(<Products/>)
        }
    }
}
export default List