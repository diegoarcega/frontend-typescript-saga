import React from 'react'
import { connect } from 'react-redux'
import { push, Push } from 'connected-react-router'
import styled from 'styled-components'
import {
 Grid, Container, Menu, MenuItemProps,
} from 'semantic-ui-react'
import * as Auth from '../../redux/actions/auth'
import { ApplicationState } from '../../interfaces/application.interface'
import { THEME } from '../../modules/styles/theme'

const ContentRow = styled(Grid.Row)`
  min-height: 500px
`

function replace(pathname?: string): string {
  if (pathname) {
    return pathname.replace('/', '')
  }
  return ''
}

interface PropsInterface {
  children: any,
  logout(): void,
  isAuthenticated: boolean,
  pushRoute: Push,
  pathname?: string,
}

interface StateInterface {
  activeSection?: string,
}

export class Application extends React.Component<PropsInterface, StateInterface> {
  state = {
    activeSection: replace(this.props.pathname),
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
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu color={THEME.primary} stackable borderless inverted size="massive" attached="top">
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
                Users
              </Menu.Item>
              )}
              {isAuthenticated && (
              <Menu.Item name="dashboard" onClick={this.handleMenuChange} active={activeSection === 'dashboard'}>
                Dashboard
              </Menu.Item>
              )}
              {isAuthenticated && <Menu.Item position="right" onClick={logout}>Logout</Menu.Item>}
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <ContentRow>
          <Grid.Column>
            <Container>{children}</Container>
          </Grid.Column>
        </ContentRow>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  logout: Auth.logout,
  pushRoute: push,
}

const mapStateToProps = (state: ApplicationState) => ({
  isAuthenticated: state.login.isAuthenticated,
  pathname: state.router.location.pathname,
})

export const App = connect(mapStateToProps, mapDispatchToProps)(Application)
