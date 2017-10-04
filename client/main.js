import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import login from './components/login'
import signup from './components/signup'
import App from './components/app'

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/signup" component={signup} />
                <Route path="/login" component={login} />
            </Switch>
        </div>
    </BrowserRouter>
)


Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.container-fluid'))
})