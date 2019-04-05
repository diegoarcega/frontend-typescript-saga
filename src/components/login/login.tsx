import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'
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
      <React.Fragment>
        <Header as="h1" color="blue">Diegos WebApp</Header>
        <Form onSubmit={this.handleLogin}>
          <Form.Group>
            <Form.Input placeholder="email" name="email" value={email} onChange={this.handleFieldChange} />
            <Form.Input placeholder="password" name="password" value={password} onChange={this.handleFieldChange} />
            <Form.Button basic primary type="submit">login</Form.Button>
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  login: Auth.login,
}

export default connect(null, mapDispatchToProps)(App)
