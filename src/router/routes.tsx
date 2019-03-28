import React from 'react'
import { Route } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'
import Login from '../components/login/login'
import { App } from '../components/app/app'

function routes(){
  return <ConnectedRouter history={history}>
    <App>
      <Route path="/" exact component={() => <p>HOME</p>} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/dashboard" component={() => <p>im dashboard</p>} />
    </App>
  </ConnectedRouter>
}

export default routes
