import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Router, Route, Switch,PrivateRoute} from 'react-router-dom'
import App from './components/app'

import Login from './components/login'
import Products from './components/products'
import Sell from './components/sell'
import Signup from './components/signup'
import WebRegister from './components/web-register'

function loggedIn() {
    // ...
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}
const routes = (
    <BrowserRouter>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/web-register/:param" onEnter={requireAuth} component={WebRegister}/>
                <PrivateRoute path="/web-register/products" onEnter={requireAuth} component={Products}/>
                <PrivateRoute path="/web-register/sell" onEnter={requireAuth} component={Sell}/>
            </Switch>
        </div>
    </BrowserRouter>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})