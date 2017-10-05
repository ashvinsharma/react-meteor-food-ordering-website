import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Login from './login'

export default class PrivateRoute extends Route {
    render() {
        let component = super.render()
        if (Meteor.userId() !== null) {
            return component
        }
        else {
            return <Redirect to='/login' component={Login}/>
        }
    }
}
