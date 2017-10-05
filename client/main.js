import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/app'

import Login from './components/login'
import Products from './components/products'
import Sell from './components/sell'
import Signup from './components/signup'
import WebRegister from './components/web-register'

const routes = (
    <BrowserRouter>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/web-register/:param" component={WebRegister}/>
                <Route path="/web-register/products" component={Products}/>
                <Route path="/web-register/sell" component={Sell}/>
            </Switch>
        </div>
    </BrowserRouter>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})