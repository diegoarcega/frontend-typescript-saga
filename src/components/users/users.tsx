import React from 'react'
import { connect } from 'react-redux'
import { Form, Header, Table } from 'semantic-ui-react'
import * as UsersActions from '../../redux/actions/users'

interface User {
  id: number,
  email: string,
  password: string,
  role: string,
}

interface Users {
  all: Array<User>
}

interface AppProps {
  getAllUsers(): void,
  all: Array<User>,
}

const App: React.SFC<AppProps> = ({ getAllUsers, all }) => {
  console.log({ all })
  return (<React.Fragment>
        <Header as="h1" color="blue">Users</Header>
        <Form onSubmit={getAllUsers}>
          <Form.Button basic primary type="submit">GET ALL USERS</Form.Button>
        </Form>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>email</Table.HeaderCell>
              <Table.HeaderCell>password</Table.HeaderCell>
              <Table.HeaderCell>role</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {all.map(user => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.password}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </React.Fragment>
  )
}

const mapDispatchToProps = {
  getAllUsers: UsersActions.getAll,
}


interface State {
  users: Users,
}

const mapStateToProps = (state: State) => ({
  all: state.users.all,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
