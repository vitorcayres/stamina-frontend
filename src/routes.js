import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Payment from './pages/Payment'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import MyClasses from './pages/MyClasses'
import Classes from './pages/Classes'
import Page404 from './pages/Page404'

/**
 * Authorize
 */
import { isAuthorizated } from './services/Authorization';

const PrivateRoute = ({ component: Component, ...rest }) => (   
    <Route
        {...rest}
        render={props =>
            isAuthorizated() === true ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

export default () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <PrivateRoute path="/dashboard" exact={true} component={Dashboard} />
            <PrivateRoute path="/classes/:id" exact={true} component={Classes} />
            <PrivateRoute path="/my-classes/:level_id/:id" exact={true} component={MyClasses} />
            <Route path="/authentication" exact={true} component={Authentication} />
            <Route path="/payment" exact={true} component={Payment} />
            <Route path='*' exact={true} component={Page404} />
        </Switch>
    </ BrowserRouter>
);