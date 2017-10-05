import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, Switch} from 'react-router-dom'
import App from './components/app'

import Login from './components/account/login'
import PrivateRoute from './components/account/private-route'
import Signup from './components/account/signup'
import WebRegister from './components/web-register/web-register'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const routes = (
    <Router history={history}>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/web-register/" component={WebRegister}/>
            </Switch>
        </div>
    </Router>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})