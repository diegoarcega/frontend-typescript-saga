import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/logout'

interface AppProps {
  children: any,
  logout(): void,
  isAuthenticated: boolean,
}

interface Login {
  isAuthenticated: boolean,
}

interface State {
  login: Login,
}

export const Application: React.SFC<AppProps> = ({ children, logout, isAuthenticated }) => {
  return <div className="App">
    <List horizontal>
      <List.Item><Link to="/">Home</Link></List.Item>
      {!isAuthenticated && <List.Item><Link to="/login">Login</Link></List.Item>}
      {isAuthenticated && <List.Item><Link to="/dashboard">Dashboard</Link></List.Item>}
      {isAuthenticated && <List.Item onClick={logout}>Logout</List.Item>}
    </List>
    <header className="App-header">
      {children}
    </header>
  </div>
}

const mapDispatchToProps = {
  logout: Auth.logout,
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.login.isAuthenticated,
})

export const App = connect(mapStateToProps, mapDispatchToProps)(Application)