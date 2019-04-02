import React from 'react'
import { connect } from 'react-redux'
import { Header, Table } from 'semantic-ui-react'
import * as UsersActions from '../../redux/actions/users'
import { User } from '../../redux/reducers/users'
import { ApplicationState } from '../../redux/reducers'

interface DispatchProps {
  getAllUsers(): void,
}

interface StateProps {
  all: User[]
  isLoading: boolean,
}

type Props = StateProps & DispatchProps

class App extends React.Component<Props> {
  componentDidMount() {
    const { getAllUsers, all } = this.props
    if (all.length === 0) getAllUsers()
  }

  render() {
    const { all, isLoading } = this.props
    return (
      <React.Fragment>
        <Header as="h1" color="blue">Users</Header>
        {isLoading ? <p>Loading...</p> : (
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
              {all.map((user: User) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.password}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
)}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  getAllUsers: UsersActions.getAll,
}

const mapStateToProps = (state: ApplicationState) => ({
  all: state.users.all,
  isLoading: state.users.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
