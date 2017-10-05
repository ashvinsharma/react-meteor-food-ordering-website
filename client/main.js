import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import App from './components/app'
import PrivateRoute from './components/PrivateRoute'

import Login from './components/login'
import Products from './components/products'
import Sell from './components/sell'
import Signup from './components/signup'
import WebRegister from './components/web-register'
import createHistory from 'history/createBrowserHistory'


const history = createHistory()
console.log(Meteor.userId())


const routes = (
    <Router history={history}>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/web-register/:param" component={WebRegister}/>
                <PrivateRoute path="/web-register/products" component={Products}/>
                <PrivateRoute path="/web-register/sell" component={Sell}/>
            </Switch>
        </div>
    </Router>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})