import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import loginReducer, { State as AuthReducer } from './login'
import newsReducer from './news'
import usersReducer, { UsersState } from './users'

// Application State
export interface ApplicationState {
  router: RouterState,
  news: any,
  login: AuthReducer,
  users: UsersState,
}

export default (history: any) => combineReducers({
  router: connectRouter(history),
  news: newsReducer,
  login: loginReducer,
  users: usersReducer,
})
