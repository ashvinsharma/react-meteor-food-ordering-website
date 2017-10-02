import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'

export default class HomeScreen extends Component {


    render() {
        if (Meteor.userId()) {
            return (
                <div className="greetings">
                    hi {Meteor.userId()}
                </div>
            )
        }

        return (
            <div className="greetings">
                hi guest
            </div>
        )
    }
}