
import { RouterState } from 'connected-react-router'
import { AuthInterface } from '../redux/reducers/auth'
import { UsersInterface } from '../redux/reducers/users'

// Application State
export interface ApplicationState {
  router: RouterState,
  news: any,
  login: AuthInterface,
  users: UsersInterface,
}
