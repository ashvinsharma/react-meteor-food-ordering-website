import createHistory from 'history/createBrowserHistory'
import {Meteor} from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, Switch} from 'react-router-dom'
// noinspection ES6UnusedImports
import {Products} from '../imports/collections/products'
import NotFound from './404'

import Login from './components/account/login'
import PrivateRoute from './components/account/private-route'
import Signup from './components/account/signup'
import App from './components/app'
import WebRegister from './components/web-register/web-register'

const history = createHistory()

const routes = (
    <Router history={history}>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/login" exact component={Login}/>
                <PrivateRoute path="/web-register" strict component={WebRegister}/>
                <Route path="/404" component={NotFound}/>
            </Switch>
        </div>
    </Router>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})