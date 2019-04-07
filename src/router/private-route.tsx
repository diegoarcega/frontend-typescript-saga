import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { hasToken } from '../modules/services/auth.service'

interface RouteInterface {
  component: any,
  [propName: string]: any,
}

export const PrivateRoute = ({ component: Component, ...rest }: RouteInterface):JSX.Element => (
  <Route
    {...rest}
    render={props => (hasToken() ? <Component {...props} /> : (
      <Redirect to={{
      pathname: '/',
      state: { from: props.location },
    }}
      />
))}
  />
)
