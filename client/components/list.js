import React, {Component} from 'react'
import Products from './products'
import Sell from './sell'

class List extends Component {
    condition() {
        if (this.props.idk === 'sell') {
            return <Sell/>
        }
        if (this.props.idk === 'products') {
            return (<Products/>)
        }
    }

    render() {
        return (
            <div>{this.condition()}</div>
        )
    }
}

export default List