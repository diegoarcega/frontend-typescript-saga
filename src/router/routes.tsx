import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PrivateRoute, OnlyNotAuthenticated } from './private-route'
import { history } from '../redux/store'
import Login from '../components/login/login'
import Users from '../components/users/users'
import { App } from '../components/app/app'
import { SingleUser } from '../components/users/single-user/single-user'

function routes(): JSX.Element {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Route path="/" exact component={() => <p>HOME</p>} />
        <OnlyNotAuthenticated path="/login" exact component={Login} />
        <PrivateRoute path="/users" exact component={Users} />
        <PrivateRoute path="/users/edit/:id" exact component={SingleUser} />
        <PrivateRoute path="/users/create" exact component={SingleUser} />
        <PrivateRoute path="/dashboard" component={() => <p>im dashboard</p>} />
      </App>
    </ConnectedRouter>
)
}

export default routes
