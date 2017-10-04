import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/app'

import Login from './components/login'
import Register from './components/web-register'
import Signup from './components/signup'

const routes = (
    <BrowserRouter>
        <div>
            <App/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/web-register" component={Register}/>
            </Switch>
        </div>
    </BrowserRouter>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})