import React from 'react'
import { connect } from 'react-redux'
import { Form, Card } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/login'

interface AppProps {
  login(email: string, password: string): void,
}

class App extends React.Component<AppProps> {
  state = {
    email: 'diego@diego.com',
    password: '1234',
  }

  handleLogin = () => {
    const { login } = this.props
    const { email, password } = this.state
    login(email, password)
  }

  handleFieldChange = (event: any) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <Card centered>
        <Card.Content>
          <Form onSubmit={this.handleLogin} size="big">
            <Form.Field>
              <Form.Input placeholder="email" name="email" value={email} onChange={this.handleFieldChange} />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder="password" name="password" value={password} onChange={this.handleFieldChange} />
            </Form.Field>
            <Form.Button color="violet" type="submit" size="large" fluid>
              Sign in
            </Form.Button>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  login: Auth.login,
}

export default connect(null, mapDispatchToProps)(App)
