import React, {Component} from 'react'
import Products from './products'
import Sell from './sell'
import FoodItems from "./fooditems"

class List extends Component {
    condition() {
        if (this.props.secondList === 'sell') {
            return <Sell/>
        }
        if (this.props.secondList === 'products') {
            return (<Products />)
        }
        if (this.props.thirdList === 'fooditems') {
            console.log("Test")
            return <FoodItems/>
        }
    }

    render() {
        return (
            <div>{this.condition()}</div>
        )
    }
}

export default List