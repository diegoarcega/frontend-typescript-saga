import React, { useState, FunctionComponent, ReactEventHandler, FormEvent } from 'react'
import { connect } from 'react-redux'
import { Form, Card, Message } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/auth'
import { ApplicationState } from '../../interfaces/application.interface'
import { THEME } from '../../modules/styles/theme'

interface PropsInterface {
  login(email: string, password: string): void
  isLoading: boolean
  isError: boolean
}

const App:FunctionComponent<PropsInterface> = (props) => {
  const [email, setEmail] = useState('diego@diego.com')
  const [password, setPassword] = useState('1234')

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()
    props.login(email, password)
  }

  const { isLoading, isError } = props

  return (
    <Card centered>
      <Card.Content>
        {isError && <Message error={isError} content="Something went wrong" />}
        <Form onSubmit={handleLogin} size="big" error={isError}>
          <Form.Field>
            <Form.Input placeholder="email" name="email" value={email} onChange={event => setEmail(event.target.value)} />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </Form.Field>
          <Form.Button color={THEME.primary} type="submit" size="large" fluid loading={isLoading}>
            Sign in
          </Form.Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.login.isLoading,
  isError: state.login.isError,
})

const mapDispatchToProps = {
  login: Auth.login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
