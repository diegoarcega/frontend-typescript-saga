import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { hasToken } from '../modules/auth/auth'

interface RouteInterface {
  component: any,
  [propName: string]: any,
}

export const PrivateRoute: React.SFC<RouteInterface> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => hasToken() ? <Component {...props} /> : <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }} />}
  />
)