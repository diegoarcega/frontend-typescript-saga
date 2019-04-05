import React from 'react'
import { connect } from 'react-redux'
import { push, Push } from 'connected-react-router'
import { Container, Menu, MenuItemProps } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/logout'
import { ApplicationState } from '../../redux/reducers'

interface PropsInterface {
  children: any,
  logout(): void,
  isAuthenticated: boolean,
  pushRoute: Push
}

interface StateInterface {
  activeSection?: string,
}

export class Application extends React.Component<PropsInterface, StateInterface> {
  state = {
    activeSection: 'home',
  }

  handleMenuChange = (event: React.MouseEvent, { name }: MenuItemProps): void => {
    this.setState({ activeSection: name }, () => {
      const { pushRoute } = this.props
      pushRoute(`/${name}`)
    })
  }

  render() {
    const { children, logout, isAuthenticated } = this.props
    const { activeSection } = this.state

    return (
      <Container>
        <Menu inverted>
          <Menu.Item name="" onClick={this.handleMenuChange} active={activeSection === ''}>
            Home
          </Menu.Item>
          {!isAuthenticated && (
          <Menu.Item name="login" onClick={this.handleMenuChange} active={activeSection === 'login'}>
            Login
          </Menu.Item>
          )}
          {isAuthenticated && (
          <Menu.Item name="users" onClick={this.handleMenuChange} active={activeSection === 'users'}>
            users
          </Menu.Item>
          )}
          {isAuthenticated && (
          <Menu.Item name="dashboard" onClick={this.handleMenuChange} active={activeSection === 'dashboard'}>
            dashboard
          </Menu.Item>
          )}
          {isAuthenticated && <Menu.Item onClick={logout}>Logout</Menu.Item>}
        </Menu>
        {children}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  logout: Auth.logout,
  pushRoute: push,
}

const mapStateToProps = (state: ApplicationState) => ({
  isAuthenticated: state.login.isAuthenticated,
})

export const App = connect(mapStateToProps, mapDispatchToProps)(Application)
