import React, {Component} from 'react'
import FirstSidebar from './first-sidebar'
import Products from './products'

export default class WebRegister extends Component {
    render() {
        return (
            <div>
                <FirstSidebar param={this.props.match.params}/>
            </div>
        )
    }
}