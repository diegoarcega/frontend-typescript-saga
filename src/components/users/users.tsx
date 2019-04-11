import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
 Header, Table, Button, Loader,
} from 'semantic-ui-react'
import { push, Push } from 'connected-react-router'
import * as UsersActions from '../../redux/actions/users'
import { UserInterface } from '../../interfaces/user.interface'
import { ApplicationState } from '../../interfaces/application.interface'
import { THEME } from '../../modules/styles/theme';

const TableRow = styled(Table.Row)`
  cursor: pointer;
`

interface DispatchProps {
  getAllUsers(): void,
  pushRoute: Push,
}

interface StateProps {
  all: UserInterface[]
  isLoading: boolean,
}

type Props = StateProps & DispatchProps

class App extends React.Component<Props> {
  componentDidMount() {
    const { getAllUsers } = this.props
    getAllUsers()
  }

  handleOpenUser = (user: UserInterface) => () => {
    this.props.pushRoute(`/users/edit/${user.id}`, user)
  }

  handleGoToCreateUser = () => this.props.pushRoute('/users/create')

  render() {
    const { all, isLoading } = this.props

    return (
      <React.Fragment>
        <Header as="h1">
          All Users
          <Button onClick={this.handleGoToCreateUser} floated="right">Add User</Button>
        </Header>
        {isLoading ? <Loader active /> : (
          <Table selectable inverted striped size="large" color={THEME.primary}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>email</Table.HeaderCell>
                <Table.HeaderCell>role</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {all && all.map((user: UserInterface) => (
                <TableRow key={user.id} onClick={this.handleOpenUser(user)}>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                </TableRow>
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
  pushRoute: push,
}

const mapStateToProps = (state: ApplicationState) => ({
  all: state.users.all,
  isLoading: state.users.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
