// noinspection NpmUsedModulesInstalled
import {createContainer} from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import {Button, Col, Grid, Row} from 'react-bootstrap'
import {Products} from '../../../../imports/collections/products'
import Cart from './cart'


class Sell extends Component {
    constructor(props) {
        super(props)
        this.state = {cart: new Set()}
    }

    componentDidMount() {
        this.selectedCheckboxes = new Set()
        this.setState({cart: this.selectedCheckboxes})
    }

    addToCart(product) {
        if (this.state.cart.has(product)) {
            this.setState(() => {
                this.state.cart.delete(product)
            })
        }
        else {
            this.setState(() => {
                this.state.cart.add(product)
            })
        }
    }

    render() {
        const products = this.props.products
        const Images = products.map((product) => {
            return (
                <li className="order-items" key={product._id}>
                    <div className="thumbnail">
                        <img src={product.image} alt={product.name}/>
                        <div className="caption">
                            <h3>
                                {product.name}
                            </h3>
                            <div>{product.description}</div>
                        </div>
                        <Button className="btn btn-success slanted" style={{width: '50%'}}
                                onClick={() => this.addToCart(product)}>
                            ₹{product.price}</Button>
                        <Button className="btn btn-success slanted" style={{width: '50%'}}
                                onClick={() => this.addToCart(product)}>
                            Add to Cart</Button>
                    </div>
                </li>
            )
        })

        return (
            <div className="sell">
                <div className="sell-buttons">
                    <Grid bsClass="container-fluid">
                        <Row>
                            <Col md={12}>
                                <div className="home">
                                    <Row>
                                        <div className="place-order">
                                            <Col md={7}>
                                                <h1>Product List</h1>
                                                <form>
                                                    <ul className="order-items">
                                                        {Images}
                                                    </ul>
                                                </form>
                                            </Col>
                                        </div>
                                        <Col md={5}>
                                            <Cart cart={Array.from(this.state.cart)}
                                                  emptyCart={() => this.setState({cart: new Set()})}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('products')
    return {products: Products.find({}).fetch()}
}, Sell)