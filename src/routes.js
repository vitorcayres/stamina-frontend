import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MyClasses from './pages/MyClasses'
import Classes from './pages/Classes'
import Authentication from './pages/Authentication'
import Payment from './pages/Payment'
import Page404 from './pages/Page404'

export default () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/dashboard" exact={true} component={Dashboard} /> 
            <Route path="/classes/:id" exact={true} component={Classes} />
            <Route path="/my-classes/:level_id/:id" exact={true} component={MyClasses} />
            <Route path="/authentication" exact={true} component={Authentication} />
            <Route path="/payment" exact={true} component={Payment} />
            <Route path='*' exact={true} component={Page404} />
        </Switch>
    </ BrowserRouter>
);