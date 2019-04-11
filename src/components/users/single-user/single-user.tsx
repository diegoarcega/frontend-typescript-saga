import React from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Location } from 'history'
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router'
import * as UsersActions from '../../../redux/actions/users'
import { ApplicationState } from '../../../interfaces/application.interface'
import { ActionInterface } from '../../../interfaces/action.interface'
import { THEME } from '../../../modules/styles/theme'
import { UserInterface } from '../../../interfaces/user.interface'

interface PropsInterface {
  location: Location,
  deleteUser: typeof UsersActions.deleteUser,
  updateUser: typeof UsersActions.updateUser,
  createUser: typeof UsersActions.createUser,
  isLoading: boolean,
  pushRoute: Push,
}

interface StateInterface {
  isEdit: boolean,
}

function getParam(location: Location, param: string): string {
  return location.state ? location.state[param] : ''
}

class User extends React.Component<PropsInterface, StateInterface, UserInterface> {
  state = {
    id: getParam(this.props.location, 'id'),
    email: getParam(this.props.location, 'email'),
    password: getParam(this.props.location, 'password'),
    role: getParam(this.props.location, 'role'),
    isEdit: this.props.location.pathname !== '/users/create',
  }

  handleFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    // @ts-ignore
    this.setState({ [name]: value })
  }

  handleSubmit = (): ActionInterface => {
    const { updateUser, createUser } = this.props
    const { isEdit } = this.state
    const user = {
      id: this.state.id,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    }

    if (isEdit) {
      return updateUser(user)
    }
    return createUser(user)
  }

  handleDelete = (id: string) => () => this.props.deleteUser(id)

  handleBackClick = () => this.props.pushRoute('/users')

  render() {
    const { isLoading } = this.props
    const {
    id, email, password, role, isEdit,
    } = this.state

    return (
      <>
        <Header as="h1">
          {isEdit ? 'Edit user' : 'Add user'}
          <Button
            floated="right"
            basic
            onClick={this.handleBackClick}
            type="button"
          >
            Back
          </Button>
        </Header>
        <Form loading={isLoading} onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input placeholder="E-mail" autoFocus value={email} name="email" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Password" value={password} name="password" onChange={this.handleFieldChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="Role" value={role} name="role" onChange={this.handleFieldChange} />
          </Form.Field>
          <div>
            <Button
              floated="left"
              basic
              color="blue"
              onClick={this.handleDelete(id)}
              type="button"
            >
              Delete this user
            </Button>
            <Button color={THEME.primary} floated="right" type="submit">Save changes</Button>
          </div>
        </Form>
      </>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.users.isLoading,
})

const mapDispatchToProps = {
  deleteUser: UsersActions.deleteUser,
  updateUser: UsersActions.updateUser,
  createUser: UsersActions.createUser,
  pushRoute: push,
}

export const SingleUser = connect(mapStateToProps, mapDispatchToProps)(User)
