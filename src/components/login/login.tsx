import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'
import * as Auth from '../../redux/actions/login'
import './App.css'

interface AppProps {
  login(email: string, password: string): void,
  user: Object,
}

interface State {
  login: Object
}

const App: React.SFC<AppProps> = ({ login }) => {
  const [email, setEmail ] = React.useState('diego@diego.com')
  const [password, setPassword ] = React.useState('1234')
  const handleLogin = () => {
    login(email, password)
  }
  return (<React.Fragment>
        <Header as="h1" color="blue">Diego's WebApp</Header>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Input placeholder="email" value={email} onChange={evt => setEmail(evt.target.value)} />
            <Form.Input placeholder="password" value={password} onChange={evt => setPassword(evt.target.value)} />
            <Form.Button basic primary type="submit">login</Form.Button>
          </Form.Group>
        </Form>
      </React.Fragment>
  )
}

const mapDispatchToProps = {
  login: Auth.login,
}

const mapStateToProps = (state: State) => ({
  user: state.login,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
