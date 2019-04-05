import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PrivateRoute } from './private-route'
import { history } from '../redux/store'
import Login from '../components/login/login'
import Users from '../components/users/users'
import { App } from '../components/app/app'

function routes(): JSX.Element {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Route path="/" exact component={() => <p>HOME</p>} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/users" exact component={Users} />
        <PrivateRoute path="/dashboard" component={() => <p>im dashboard</p>} />
      </App>
    </ConnectedRouter>
)
}

export default routes
