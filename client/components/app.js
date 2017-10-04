import React, {Component} from 'react'

class App extends Component {
    render() {
        if (Meteor.userId()) {
            return (
                <div> hi {Meteor.userId()}
                </div>
            )
        }
    }
}

export default App