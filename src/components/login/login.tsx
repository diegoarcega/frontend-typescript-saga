import React from 'react'
import { connect } from 'react-redux'
import { Form, Card, Message } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/auth'
import { ApplicationState } from '../../interfaces/application.interface'
import { THEME } from '../../modules/styles/theme';

interface PropsInterface {
  login(email: string, password: string): void,
  isLoading: boolean,
  isError: boolean,
}

interface StateInterface {
  email: string
  password: string
}

class App extends React.Component<PropsInterface, StateInterface> {
  state = {
    email: 'diego@diego.com',
    password: '1234',
  }

  handleLogin = () => {
    const { login } = this.props
    const { email, password } = this.state
    login(email, password)
  }

  handleFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    // @ts-ignore
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { isLoading, isError } = this.props

    return (
      <Card centered>
        <Card.Content>
          {isError && <Message error={isError} content="Something went wrong" />}
          <Form onSubmit={this.handleLogin} size="big" error={isError}>
            <Form.Field>
              <Form.Input
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleFieldChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder="password" name="password" value={password} onChange={this.handleFieldChange} />
            </Form.Field>
            <Form.Button color={THEME.primary} type="submit" size="large" fluid loading={isLoading}>
              Sign in
            </Form.Button>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.login.isLoading,
  isError: state.login.isError,
})

const mapDispatchToProps = {
  login: Auth.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
