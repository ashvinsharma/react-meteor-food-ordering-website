import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/app'

import Login from './components/login'
import Register from './components/web-register'
import Signup from './components/signup'
import Products from './components/products'
import List from './components/list'
import Sell from './components/sell'

const routes = (
    <BrowserRouter>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/web-register" component={Register}/>
                <Route path="/products" component={Products}/>
                <Route path="/sell" component={Sell}/>
                <Route path="/list/:parent" component={List}/>

            </Switch>
        </div>
    </BrowserRouter>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})