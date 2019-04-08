import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Location } from 'history'
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import * as UsersActions from '../../../redux/actions/users'
import { ApplicationState } from '../../../interfaces/application.interface'
import { UserInterface } from '../../../interfaces/user.interface'
import { THEME } from '../../../modules/styles/theme';

interface Props {
  location: Location,
  deleteUser(id: string): void,
  updateUser(user: UserInterface): void,
  isLoading: boolean,
  pushRoute: Push,
}

class User extends React.Component<Props> {
  state = {
    id: this.props.location.state.id,
    email: this.props.location.state.email,
    password: this.props.location.state.password,
    role: this.props.location.state.role,
  }

  handleFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    this.props.updateUser(this.state)
  }

  handleDelete = (id: string) => () => this.props.deleteUser(id)

  handleBackClick = () => this.props.pushRoute('/users')

  render() {
    const { isLoading } = this.props
    const {
    id, email, password, role,
    } = this.state

    return (
      <Form loading={isLoading} onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input placeholder="E-mail" value={email} name="email" onChange={this.handleFieldChange} />
        </Form.Field>
        <Form.Field>
          <Form.Input placeholder="Password" value={password} name="password" onChange={this.handleFieldChange} />
        </Form.Field>
        <Form.Field>
          <Form.Input placeholder="Role" value={role} name="role" onChange={this.handleFieldChange} />
        </Form.Field>
        <div>
          <Button floated="left" basic color="blue" onClick={this.handleDelete(id)}>Delete this user</Button>
          <Button color={THEME.primary} floated="right">Save changes</Button>
          <Button floated="right" basic onClick={this.handleBackClick}>Back</Button>
        </div>
      </Form>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.users.isLoading,
})

const mapDispatchToProps = {
  deleteUser: UsersActions.deleteUser,
  updateUser: UsersActions.updateUser,
  pushRoute: push,
}

export const SingleUser = connect(mapStateToProps, mapDispatchToProps)(User)
