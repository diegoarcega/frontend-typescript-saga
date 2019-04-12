import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { hasToken } from '../modules/services/auth.service'

interface RouteInterface {
  component: any
  [propName: string]: any
}

function redirectTo(pathname: string, props: RouteProps) {
  return {
    pathname,
    state: { from: props.location },
  }
}

export const PrivateRoute = ({ component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props => (hasToken() ? <Component {...props} /> : <Redirect to={redirectTo('/', props)} />)}
  />
)

export const OnlyNotAuthenticated = ({ component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props => (hasToken() ? <Redirect to={redirectTo('/', props)} /> : <Component {...props} />)}
  />
)
